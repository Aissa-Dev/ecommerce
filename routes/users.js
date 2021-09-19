const express = require("express");
const router = express.Router();
const { greeting, signup } = require("../controllers/userController");

router.get("/", greeting);

router.post("/signup", signup);

module.exports = router;
