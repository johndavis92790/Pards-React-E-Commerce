const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const routes = require('./routes/routes');
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cookieParser());

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));

app.use(express.json());

app.use('/auth', routes);

app.listen(PORT, () => {
  console.log(`Auth server running on port ${PORT}!`);
});