const router = require("express").Router();
const userRoutes = require("./userRoutes");
const partRoutes = require("./partRoutes");
const orderRoutes = require("./orderRoutes");

router.use("/users", userRoutes);
router.use("/part", partRoutes);
router.use("/order", orderRoutes);

module.exports = router;
