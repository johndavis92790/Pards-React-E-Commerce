const { Schema, Types, model } = require("mongoose");

//part schema
const partSchema = new Schema(
  {
    partNumber: {
      type: String,
    },
    brand: {
      type: String,
    },
    description: {
      type: String,
    },
    descriptionTwo: {
      type: String,
    },
    features: {
      type: String,
    },
    category: {
      type: String,
    },
    photo: {
      type: String,
    },
    retailPrice: {
      type: String,
    },
    mapPrice: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Part = model("Part", partSchema);

module.exports = Part;
