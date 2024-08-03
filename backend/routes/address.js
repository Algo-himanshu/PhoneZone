const express = require("express");
const router = express.Router();

const { addAddress } = require("../controllers/address");
const { allAddress } = require("../controllers/address");

router.post("/addAddress", addAddress);
router.get("/allAddress", allAddress);

module.exports = router;
