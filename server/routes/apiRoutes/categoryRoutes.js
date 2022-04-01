const router = require("express").Router();
const {
  getCategorys,
  getCategory,
} = require("../../controller/categoryController");

router.route("/").get(getCategorys).post(createCategory);

router.route("/:categoryId").get(getCategory).put().delete();

module.exports = router;
