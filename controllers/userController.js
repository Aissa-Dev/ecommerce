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

exports.signin = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ error: "message not fount, please signup !" });
    }

    if (!user.authenticate(password)) {
      return res.status().json({ error: "Email and Password dont Match" });
    }
  });
};
