const express = require('express')
const {handle_verify} = require('../middleware/Aut_middleware')
const Router = express.Router()
const { handle_get_all, handle_add, handle_delete, handle_edit, handle_get_one } = require('../controller/cash_controller')

Router.get('/', handle_get_all)
Router.get('/:id', handle_get_one)
// Router.use(handle_verify)
Router.post('/add', handle_add)
Router.put('/edit/:id', handle_edit)
Router.delete('/delete/:id', handle_delete)

module.exports = Router