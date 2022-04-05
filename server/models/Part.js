const { Schema, Types, model } = require("mongoose");

const partSchema = new Schema(
  {
    partNumber: {
      type: String,
      trim: true,
      allowNull: false,
    },
    brand: {
      type: String,
      trim: true,
      allowNull: false,
    },
    description: {
      type: String,
      allowNull: true,
    },
    descriptionTwo: {
      type: String,
      allowNull: true,
    },
    features: {
      type: String,
      allowNull: true,
    },
    category: {
      type: String,
      allowNull: true,
    },
    photo: {
      type: String,
      allowNull: true,
    },
    retailPrice: {
      type: String,
      allowNull: true,
    },
    mapPrice: {
      type: String,
      allowNull: true,
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
