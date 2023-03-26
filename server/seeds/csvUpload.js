const db = require("../config/connection");

//function to parse data from csv files, then upload the data to the mongo database
module.exports = function csvUpload(req, res) {
  // parses the json data
  var parsed = JSON.parse(JSON.stringify(req.body));
  //creates array of objects
  var arrayParts = Object.values(parsed);
  //connects to mongo collection
  var collection = db.collection("parts");

  //function to calculate the price in cents for the stripe server
  function priceToCents(part) {
    console.log(part)
    if (part["MAP"] === "") {
      var dollars = parseFloat(part["Retail"]);
      var cents = Math.round(dollars * 100);
      return cents;
    } else {
      var dollars = parseFloat(part["MAP"]);
      var cents = Math.round(dollars * 100);
      return cents;
    }
  }

  //map function to map over each product and upload it to the mongo database one at a time,
  //I did try to do a collection.insertmany to insert them all at the same time but ran into 
  //issues and ran out of time and since this worked, I just kept it, I am sure that this 
  //can be fixed and made much more efficient
  arrayParts.map((part) => {
    var oneRow = {
      partNumber: part["Part Number"],
      brand: part["Brand Label"],
      description: part["Title"],
      descriptionTwo: part["Short Description"],
      category: part["Category (PCDB)"],
      photo: part[`Primary\r`],
      retailPrice: part["Retail"],
      mapPrice: part["MAP"],
      priceInCents: priceToCents(part),
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
