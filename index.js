const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log("Can not connect " + e);
  });

app.get("/", (req, res) => {
  res.send({ message: "Hello developpers" });
  res.end();
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is running on port : ${port}`);
});
