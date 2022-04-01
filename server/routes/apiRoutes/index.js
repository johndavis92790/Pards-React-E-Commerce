const router = require("express").Router();
const userRoutes = require("./userRoutes");
const partRoutes = require("./partRoutes");

router.use("/users", userRoutes);
router.use("/part", partRoutes);


module.exports = router;
