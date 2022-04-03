const db = require("../config/connection");
var MongoClient = require("mongodb").MongoClient;
const csvtojson = require("csvtojson");
var fs = require("fs");

module.exports = function dbUpdate() {
  const dbURL =
    "mongodb+srv://johndavis92790:$p1d3rMan@cluster0.8kqia.mongodb.net/pardsDB?retryWrites=true&w=majority";

  MongoClient.connect(dbURL, function (err, dbDrop) {
    if (err) throw err;
    var dbo = dbDrop.db("pardsDB");
    dbo.collection("parts").drop(function (err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
      dbDrop.close();
    });
  });
  
  var csvFiles = fs.readdirSync(__dirname + "/csv/");
  console.log("csvFiles", csvFiles);

  csvFiles.map((csv, i) => {
    var arrayToInsert = [];
    csvtojson()
      .fromFile("./seeds/csv/" + csv)
      .then((source) => {
        // Fetching the all data from each row
        for (var i = 0; i < source.length; i++) {
          var oneRow = {
            partNumber: source[i]["Part Number"],
            brand: source[i]["Brand Label"],
            description: source[i]["Title"],
            descriptionTwo: source[i]["Short Description"],
            category: source[i]["Category (PCDB)"],
            photo: source[i]["Primary"],
            retailPrice: source[i]["Retail"],
            mapPrice: source[i]["MAP"],
          };
          arrayToInsert.push(oneRow);
        }
        var collection = db.collection("parts");
        collection.insertMany(arrayToInsert, (err, result) => {
          if (err) console.log(err);
          if (result) {
            console.log("Import " + csv + " into database successfully.");
          }
        });
      });
  })
};;
