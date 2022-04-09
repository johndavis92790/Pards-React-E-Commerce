var MongoClient = require("mongodb").MongoClient;
const csvUpload = require("./csvUpload");

//connects to the mongo database and drops the entire collection
module.exports = function dbUpdate(req, res) {
  console.log("req1", req.body);
  const dbURL = process.env.MONGODB_URI;

  MongoClient.connect(dbURL, function (err, dbDrop) {
    if (err) throw err;
    var dbo = dbDrop.db("pardsDB");
    dbo.collection("parts").drop(function (err, delOK) {
      if (err) throw err;
      if (delOK) {
        console.log("Collection deleted");
        csvUpload(req, res);
      }
      dbDrop.close();
    });
  });
};
