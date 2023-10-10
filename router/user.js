const express = require("express");
const Router = express.Router();
const {
  registerUser,
  authUser,
} = require("../controller/user_cont");
const {handle_verify} = require('../middleware/Aut_middleware')
Router.post("/verify", handle_verify);
Router.post("/login", authUser);
Router.post("/signup", registerUser);

module.exports = Router;
