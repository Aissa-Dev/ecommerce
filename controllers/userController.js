const User = require("../models/user");

exports.greeting = (req, res) => {
  res.send("Hello Users");
};

exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.send(user);
  });
};
