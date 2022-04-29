const router = require("express").Router();
const userRoutes = require("../../server/routes/apiRoutes/userRoutes");

router.use("/auth", userRoutes);

module.exports = router;