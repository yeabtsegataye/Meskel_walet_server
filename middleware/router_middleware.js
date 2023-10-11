const jwt = require("jsonwebtoken");
const User = require("../model/user");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      // Decode token id
      const decoded = jwt.verify(token, process.env.SECRETE);
      const user = await User.findById(decoded.id);
      if (user) {
        req.user = user; // Attach the user object to the request for further use
        next();
      } else {
        res.status(401).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(401).json({ error: "Token verification failed" });
    }
  } else {
    res.status(401).json({ error: "No token provided" });
  }
};

module.exports = { protect };
