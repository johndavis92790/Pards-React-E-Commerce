const { Part } = require("../models");

const partController = {
  getParts: async function (req, res) {
    try {
      const partData = await Part.find();
      res.json(partData);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getPart: async function (req, res) {
    try {
      const partData = await Part.findById(req.params.partId);
      res.json(partData);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = partController;
