const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');
const cookieParser = require('cookie-parser')
const db = require("./config/connection");

const routes = require('./routes');
const PORT = process.env.PORT || 3003;
const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.json());

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000', 'https://ancient-island-13793.herokuapp.com/']
}));

// app.use(routes);

app.post("/auth/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    console.log("test")
    return res.status(404).send({
      message: "User not found"
    })
  }
  if (!await bcrypt.compare(req.body.password, user.password)) {
    return res.status(400).send({
      message: "Invalid password"
    })
  }
  const token = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET);

  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  })
  res.send({
    message: 'Successful login'
  })
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Auth server running on port ${PORT}!`);
  });
});
