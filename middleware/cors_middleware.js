const dotenv = require('dotenv')
dotenv.config()

const allowedOrigins = [process.env.CORS]; // Replace with your specific origin(s)

// Configure CORS middleware
const corsOptions = {
  origin: function (origin, callback) {
    // Check if the origin is included in the allowedOrigins array
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
module.exports = {corsOptions}