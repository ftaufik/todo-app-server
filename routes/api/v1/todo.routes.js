const bodyParser = require('body-parser')
const todoControllerAPI = require('../../../controllers/api/v1/todo.api.controller')

// const jsonParser = bodyParser.json()
const router = require("express").Router()
require("express-group-routes");

router.post('/create/:id', todoControllerAPI.addTodo)
router.put('/edit/:id', todoControllerAPI.editTodoTask)
router.put('/complete/:id', todoControllerAPI.editTodoComplete)
router.get("/:id", todoControllerAPI.getUserTodos);
router.delete("/delete/:id", todoControllerAPI.deleteTodo);

module.exports = router;
