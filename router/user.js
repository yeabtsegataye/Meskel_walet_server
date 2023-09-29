const express = require("express");
const Router = express.Router();
const {
  registerUser,
  authUser,
} = require("../controller/user_cont");

Router.post("/login", authUser);
Router.post("/signup", registerUser);

module.exports = Router;
