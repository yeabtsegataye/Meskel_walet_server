const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
//////
const cors = require('cors');
const routers = require('./router/meskel');
const user = require('./router/user');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_DB).then(() => {
  app.listen(process.env.PORT, () => {
    console.log('listening on port :', process.env.PORT);
  });
});
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(user);
app.use(routers);
