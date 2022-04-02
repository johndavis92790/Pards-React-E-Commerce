const router = require("express").Router();
const {
  getParts,
  getPart,
} = require("../../controller/partController");

router.route("/").get(getParts)

router.route("/:partId").get(getPart)

module.exports = router;
