require('dotenv').config()

const express = require("express");
require('dotenv').config()
var bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const dbUpdate = require("./seeds/dbUpdate");

const db = require("./config/connection");
const { nextTick } = require("process");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(express.json());



//Authentication

/* const posts = [
  {
    username: "Aaron",
    title: "post 1"
  },
  {
    username: "Hum",
    title: "post 2"
  }
]

app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})
/* 
app.post("/login", (req, res) => {


  const username = req.body.username
  const user = {name: username}

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({ accessToken: accessToken})
})
 */
/* function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

app.listen(3000)  */

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

//post route for uploading product data
app.post("/upload", (req, res) => {
  dbUpdate(req, res);
});
