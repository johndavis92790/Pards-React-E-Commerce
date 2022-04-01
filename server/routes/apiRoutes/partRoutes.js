const router = require("express").Router();
const {
  getParts,
  getPart,
} = require("../../controller/partController");

router.route("/").get(getParts).post(createPart);

router.route("/:partId").get(getPart).put().delete();

module.exports = router;
