const express = require("express");
const router = express.Router();

const { homeData } = require("../controllers/homeData");

router.post("/homeData", homeData);

module.exports = router;
