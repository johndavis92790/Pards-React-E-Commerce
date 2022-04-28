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

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Auth server running on port ${PORT}!`);
  });
});
