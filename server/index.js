const express = require("express");
const path = require("path");
const routes = require("./routes");
const router = require("express").Router();

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

const csvtojson = require("csvtojson");
const mongodb = require("mongodb");

// CSV file name
const csvTest = "./csvTest.csv";
var arrayToInsert = [];
csvtojson().fromFile(csvTest).then(source => {
  // Fetching the all data from each row
  for (var i = 0; i < source.length; i++) {
    var oneRow = {
      partNumber: source[i]["Part Number"],
      brand: source[i]["Brand Label"]
    };
    arrayToInsert.push(oneRow);
  }
  var collection = db.collection("parts");
  console.log("arrayToInsert", arrayToInsert);
  console.log("collection", collection);
  collection.insertMany(arrayToInsert, (err, result) => {
    if (err) console.log(err);
    if (result) {
      console.log("Import CSV into database successfully.", result);
    }
  });
});
