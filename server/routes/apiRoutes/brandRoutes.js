const router = require("express").Router();
const {
  getBrands,
  getBrand,
} = require("../../controller/brandController");

router.route("/").get(getBrands)

// router.route("/:brandId").get(getBrand).put().delete();

module.exports = router;
