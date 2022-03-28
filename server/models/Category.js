const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    trim: true,
    allowNull: false,
  },
});

const Category = model("category", categorySchema);

module.exports = Category;
