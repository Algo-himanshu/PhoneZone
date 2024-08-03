const express = require("express");
const router = express.Router();

const { fetchCarousalData } = require("../controllers/fetchCarousalData");

router.get("/fetchCarousalData", fetchCarousalData);

module.exports = router;
