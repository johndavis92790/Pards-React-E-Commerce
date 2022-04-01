const { Schema, model } = require("mongoose");

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
    listPrice: {
      type: Number,
      allowNull: true,
    },
    retailPrice: {
      type: Number,
      allowNull: true,
    },
    jobberPrice: {
      type: Number,
      allowNull: true,
    },
    sellPrice: {
      type: Number,
      allowNull: true,
    },
    costPrice: {
      type: Number,
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
