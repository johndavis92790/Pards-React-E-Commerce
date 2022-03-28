const { Schema, model } = require("mongoose");

const brandSchema = new Schema({
  name: {
    type: String,
    trim: true,
    allowNull: false,
  },
  code: {
    type: String,
    trim: true,
    allowNull: false,
  },
});

const Brand = model("brand", brandSchema);

module.exports = Brand;
