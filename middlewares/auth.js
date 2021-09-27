const expressJWT = require("express-jwt");
require("dotenv").config();
exports.requireSignIn = expressJWT({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"], //default algorithm to generate the token
  userProperty: "auth" // insert to auth payload data
});

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;

  if (!user) {
    return res.status(403).json({
      error: "acces denied"
    });
  }
  next();
};
