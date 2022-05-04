const router = require("express").Router();
const partRoutes = require("./partRoutes");
const orderRoutes = require("./orderRoutes");
const userRoutes = require("./userRoutes");
const stripeRoutes = require("./stripeRoutes");
const uploadRoutes = require("./uploadRoutes");

router.use("/part", partRoutes);
router.use("/order", orderRoutes);
router.use("/user", userRoutes);
router.use("/stripe", stripeRoutes);
router.use("/upload", uploadRoutes);

module.exports = router;
