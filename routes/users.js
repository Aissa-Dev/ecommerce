const express = require("express");
const router = express.Router();
const { greeting, signup, signin } = require("../controllers/userController");
const { userSignUpValidator } = require("../middlewares/userValidator");
router.get("/", greeting);

router.post("/signup", userSignUpValidator, signup);
router.post("/signin", signin);

module.exports = router;
