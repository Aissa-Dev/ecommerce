const User = require("../models/user");
const jwt = require("jsonwebtoken");

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

  console.log("req body : ", email, " ", password);
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ error: "Email not fount, please signup !" });
    } else if (!user.authenticate(password)) {
      return res.status(401).json({ error: "Email and Password dont Match" });
    } else {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

      res.cookie("token", token, { expire: new Date() + 8002000 });
      const { _id, name, email, role } = user;
      res.json({
        token,
        user: { _id, name, email, role }
      });
    }
  });
};
