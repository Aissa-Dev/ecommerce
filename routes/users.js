const express = require("express");
const router = express.Router();
const { greeting } = require("../controllers/userController");

router.get("/", greeting);

module.exports = router;
