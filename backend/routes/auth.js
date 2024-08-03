const express = require("express");
const router = express.Router();

const { register, login, currentUser } = require("../controllers/auth");
const { jwtAuth } = require("../middlewares/jwtAuth");

router.post("/register", register);
router.post("/login", login);
router.get("/current-user", jwtAuth, currentUser);

module.exports = router;
