const db = require('../../../models');
const Todo = db.todos;
const User = db.users;
const { v4: uuidv4 } = require('uuid');

module.exports = {
    getUserTodos: async (req, res) => {
        const userId = req.params.id;
        try {
            const todos = await Todo.findAll({
                where: {
                    userId: userId
                }
            });

            res.status(200).json({
                message: "Success retrieving data",
                data: todos
            })

        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "Internal server error"})
        }
    },
    addTodo: async (req, res) => {
        const userId = req.params.id;

        try {
            // const newId = uuidv4();
            // console.log(typeof newId);
            const todos = await Todo.create({
                id: parseInt(uuidv4()),
                userId: userId,
                todo: req.body.todo,
                isComplete: false
            });

            const updatedTodo = await Todo.findAll({
                where: {
                    userId: userId
                }
            });

            res.status(201).json({
                message: "Success creating data",
                data: updatedTodo
            })

        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "Internal server error"})
        }
    },
    editTodoTask: async (req, res) => {
        const id = req.params.id;

        try {
            const todo = await Todo.findByPk(id);
            todo.todo = req.body.todo ? req.body.todo : todo.todo;
            await todo.save();

            if(!todo){
                res.status(404).json({
                    message: "Todo not found",
                    data: todo
                });
            }

            const updatedTodo = await Todo.findAll({
                where: {
                    userId: todo.userId
                }
            });

            // const updatedTodo = await Todo.findByPk(id);
            res.status(200).json({
                message: "Success updating data",
                data: updatedTodo
            })

        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "Internal server error"})
        }
    },
    editTodoComplete: async (req, res) => {
        const id = req.params.id;

        try {
            const todo = await Todo.findByPk(id);
            todo.isComplete = !todo.isComplete;
            await todo.save();

            if(!todo){
                res.status(404).json({
                    message: "Todo not found",
                    data: todo
                });
            }

            const updatedTodo = await Todo.findAll({
                where: {
                    userId: todo.userId
                }
            });
            // const todoUpdate = await Todo.findByPk(id);
            res.status(200).json({
                message: "Success updating data",
                data: updatedTodo
            })

        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "Internal server error"})
        }
    },
    deleteTodo: async (req, res) => {
        const id = req.params.id;
        try {
            const todo = await Todo.findByPk(id);
            const userId = todo.userId
            await todo.destroy();

            if(!todo){
                res.status(404).json({
                    message: "Todo not found"
                });
            }

            const updatedTodo = await Todo.findAll({
                where: {
                    userId: userId
                }
            });

            res.status(200).json({
                message: "Success deleting data",
                data: updatedTodo
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "Internal server error"})
        }

    }
}