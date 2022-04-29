const router = require("express").Router();
const partRoutes = require("./partRoutes");
const orderRoutes = require("./orderRoutes");
const userRoutes = require("./userRoutes");

router.use("/part", partRoutes);
router.use("/order", orderRoutes);
router.use("/user", userRoutes);

module.exports = router;
