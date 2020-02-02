const jwtToken = require("jsonwebtoken");
const secrets = require("../secrets.js");

module.exports = function generateToken(user) {
  const payload = {
    username: user.username,
    id: user.id
  };
  const options = {
    expiresIn: "7d"
  };
  return jwtToken.sign(payload, secrets.jwtSecret, options);
};
