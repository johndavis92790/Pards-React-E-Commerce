const router = require("express").Router();
const userRoutes = require("./userRoutes");
const brandRoutes = require("./brandRoutes");
const partRoutes = require("./partRoutes");
const categoryRoutes = require("./categoryRoutes");

router.use("/users", userRoutes);
router.use("/brand", brandRoutes);
router.use("/part", partRoutes);
router.use("/category", categoryRoutes);

module.exports = router;
