var MongoClient = require("mongodb").MongoClient;
const csvUpload = require("./csvUpload");

module.exports = function dbUpdate(req, res) {
  console.log("req1", req.body);
  const dbURL =
    "mongodb+srv://johndavis92790:$p1d3rMan@cluster0.8kqia.mongodb.net/pardsDB?retryWrites=true&w=majority";

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
