const { Part } = require("../models");

//controller to get all the parts or just one, the deletion happens when the prodcuts are uploaded
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
