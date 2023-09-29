const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const schema = mongoose.Schema;

const userModel = schema(
  {
    Email: { type: "String", required: true, unique: true },
    password: { type: "String", required: true },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

userModel.statics.signup = async function (
  Email,
  password,
  isAdmin,
) {
  if (!password || !Email) {
    throw Error("fill the space first");
  }
  const match = await this.findOne({ Email });

  if (match) {
    throw Error("user alrady exists");
  }
 

  const hashed = await bcrypt.hash(password, 10);
  const user = await this.create({
    Email,
    password: hashed,
    isAdmin,
  });
  return user;
};
userModel.statics.login = async function (Email, password) {
  if (!Email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ Email });
  if (!user) {
    throw Error("user not found");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};
const User = mongoose.model("user", userModel);
module.exports = User;
