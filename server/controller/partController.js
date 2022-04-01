const { Part } = require("../models");

const partController = {
  getParts: async function (req, res) {
    try {
      const partdata = await Part.find();
      res.json(partdata);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getPart: async function (req, res) {
    try {
      const partdata = await Part.findById(req.params.partId);
      res.json(partdata);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = partController;
