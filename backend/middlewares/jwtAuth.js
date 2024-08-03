const { expressjwt: expressJWT } = require("express-jwt");
require("dotenv").config();

const jwtAuth = expressJWT({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  requestProperty: "user", // Attach decoded payload to req.auth as without this default variable("req.user" - in controller-auth) is now working
});

module.exports = { jwtAuth };
