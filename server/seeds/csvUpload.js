const db = require("../config/connection");

module.exports = function csvUpload(req, res) {
  var parsed = JSON.parse(JSON.stringify(req.body));
  var arrayParts = Object.values(parsed);
  var collection = db.collection("parts");

  // TODO: this code could be cleaner (use forEach or a for loop)
  arrayParts.map((part, i) => {
    var oneRow = {
      partNumber: arrayParts[i]["Part Number"],
      brand: arrayParts[i]["Brand Label"],
      description: arrayParts[i]["Title"],
      descriptionTwo: arrayParts[i]["Short Description"],
      category: arrayParts[i]["Category (PCDB)"],
      photo: arrayParts[i][`Primary\r`],
      retailPrice: arrayParts[i]["Retail"],
      mapPrice: arrayParts[i]["MAP"]
    };
    collection.insertOne(oneRow, (err, result) => {
      if (err) console.log(err);
      if (result) {
        console.log(
          "Imported " + oneRow.partNumber + " into database successfully."
        );
      }
    });
  });
}
