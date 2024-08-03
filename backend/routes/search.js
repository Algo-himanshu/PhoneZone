const express = require("express");
const router = express.Router();

const { searchResult } = require("../controllers/search");

router.post("/search", searchResult);

module.exports = router;
