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
    // listPrice: {
    //   type: Types.Decimal128,
    //   allowNull: true,
    // },
    // retailPrice: {
    //   type: Types.Decimal128,
    //   allowNull: true,
    // },
    // jobberPrice: {
    //   type: Types.Decimal128,
    //   allowNull: true,
    // },
    // sellPrice: {
    //   type: Types.Decimal128,
    //   allowNull: true,
    // },
    // costPrice: {
    //   type: Types.Decimal128,
    //   allowNull: true,
    // },
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
