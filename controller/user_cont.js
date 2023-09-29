const User = require("../model/user");

const jwt = require("jsonwebtoken");

const tokens = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "3d" });
};
/////////////////////////
const registerUser = async (req, res) => {
  const { Email, password, isAdmin } = req.body;

  try {
    const user = await User.signup(
      Email,
      password,
      isAdmin,
    );
    const token = tokens(user._id);
    const id = user._id;
    return res
      .status(200)
      .json({ id, token, Email, isAdmin });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
/////////////////////////
const authUser = async (req, res) => {
  const { Email, password } = req.body;
  try {
    const user = await User.login(Email, password);
    const isAdmin = user.isAdmin;
    const token = tokens(user._id);
    const id = user._id;

    res
      .status(200)
      .json({ id, token, Email, isAdmin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//////////////////////////

module.exports = {
  registerUser,
  authUser,

};
