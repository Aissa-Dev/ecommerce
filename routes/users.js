const express = require("express");
const router = express.Router();
const {
  greeting,
  signup,
  signin,
  signout
} = require("../controllers/userController");
const { userSignUpValidator } = require("../middlewares/userValidator");
const { requireSignIn } = require("../middlewares/auth.js");
router.get("/", greeting);

router.post("/signup", userSignUpValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

router.get("/hello", requireSignIn, (req, res) => {
  res.send("hello thereee");
});

module.exports = router;
