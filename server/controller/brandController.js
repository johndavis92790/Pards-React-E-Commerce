const { Brand } = require("../models");

const brandController = {
  getBrands: async function (req, res) {
    try {
      const branddata = await Brand.find();
      res.json(branddata);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = brandController;
