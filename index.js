const express = require("express");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");
const cookieParser = require("cookie-parser");

// import routes
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");

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
//middlewares
app.use(express.json());
app.use(expressValidator());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", usersRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is running on port : ${port}`);
});
