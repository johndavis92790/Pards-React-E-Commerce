const { Schema, model } = require("mongoose");

const partSchema = new Schema({
  partNumber: {
    type: String,
    trim: true,
    allowNull: false,
  },
  password: {
    type: String,
    trim: true,
    allowNull: false,
  },
  price: {
    type: Integer,
    allowNull: true
  }
});

const Part = model("part", partSchema);

module.exports = Part;
