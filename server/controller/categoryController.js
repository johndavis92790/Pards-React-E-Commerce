const { Category } = require("../models");

const categoryController = {
  getCategorys: async function (req, res) {
    try {
      const categorydata = await Category.find();
      res.json(categorydata);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getCategory: async function (req, res) {
    try {
      const categorydata = await Category.findById(req.params.CategoryId);
      res.json(categorydata);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = categoryController;
