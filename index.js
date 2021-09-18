const express = require("express");
const mongoose = require("mongoose");

// import routes
const userRoutes = require("./routes/users");

//config app
const app = express();
require("dotenv").config();

//DB
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log("Can not connect " + e);
  });

app.use("/api/users", userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is running on port : ${port}`);
});
