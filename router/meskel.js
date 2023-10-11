const express = require('express')
// const {handle_verify} = require('../middleware/Aut_middleware')
const Router = express.Router()
const { handle_get_all, handle_add, handle_delete, handle_edit, handle_get_one } = require('../controller/cash_controller')
const { protect } = require("../middleware/router_middleware");


Router.get('/', handle_get_all)
Router.get('/:id', handle_get_one)
// Router.use(handle_verify)
Router.route('/add').post(protect,handle_add)
Router.route('/edit/:id').put(protect, handle_edit)
Router.route('/delete/:id').delete(protect, handle_delete)

// router.route("/groupadd").put(protect, addToGroup);

module.exports = Router