const router = require("express").Router();
const {
  getBrands,
  getBrand,
} = require("../../controller/BrandController");

router.route("/").get(getBrands).post(createBrand);

router.route("/:brandId").get(getBrand).put().delete();

module.exports = router;
