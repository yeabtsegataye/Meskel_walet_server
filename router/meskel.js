const express = require('express')
const Router = express.Router()
const {handle_get_all, handle_add,handle_delete, handle_edit}= require('../controller/cash_controller')

Router.get('/',handle_get_all)
Router.post('/add',handle_add)
Router.put('/edit/:id',handle_edit)
Router.delete('/delete/:id',handle_delete)

module.exports = Router