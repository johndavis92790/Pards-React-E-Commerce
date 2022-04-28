const router = require("express").Router();
const partRoutes = require("./partRoutes");
const orderRoutes = require("./orderRoutes");

router.use("/part", partRoutes);
router.use("/order", orderRoutes);

module.exports = router;
