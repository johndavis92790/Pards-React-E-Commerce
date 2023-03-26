const router = require('express').Router();
const dbUpdate = require("../../seeds/dbUpdate");

//post route for uploading product data
router.post("/", (req, res) => {
  dbUpdate(req, res);
});

module.exports = router;