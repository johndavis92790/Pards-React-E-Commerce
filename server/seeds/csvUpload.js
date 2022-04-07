const db = require("../config/connection");

module.exports = function csvUpload(req, res) {
  var parsed = JSON.parse(JSON.stringify(req.body));
  var arrayParts = Object.values(parsed);
  var collection = db.collection("parts");

  function priceToCents(price) {
    var dollars = parseFloat(price);
    var cents = dollars * 100;
    return cents;
  }

  // TODO: this code could be cleaner (use forEach or a for loop)
  arrayParts.map((part, i) => {
    var oneRow = {
      partNumber: part["Part Number"],
      brand: part["Brand Label"],
      description: part["Title"],
      descriptionTwo: part["Short Description"],
      category: part["Category (PCDB)"],
      photo: part[`Primary\r`],
      retailPrice: part["Retail"],
      mapPrice: part["MAP"],
      priceInCents: priceToCents(part["Retail"]),
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
