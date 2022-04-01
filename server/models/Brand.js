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
  parts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Part",
    },
  ],
});

const Brand = model("Brand", brandSchema);

module.exports = Brand;
