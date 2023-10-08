const express = require('express');
const Router = express.Router();
const {
  handleInput,
  handleSubmit,
  handle_delete,
  handle_edit,
} = require('../controller/cash_controller');

Router.get('/', handleInput);
Router.post('/add', handleSubmit);
Router.put('/edit/:id', handle_edit);
Router.delete('/delete/:id', handle_delete);

module.exports = Router;
