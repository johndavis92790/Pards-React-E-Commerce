const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {
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

const Category = model("Category", categorySchema);

module.exports = Category;
