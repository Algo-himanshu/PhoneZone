const { expressjwt: expressJWT } = require("express-jwt");
require("dotenv").config(); //import dotenv
const requireSignin = expressJWT({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});
console.log("its middleware");
module.exports = { requireSignin };
