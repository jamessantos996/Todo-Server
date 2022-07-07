const todoModel = require('../models/todoModel');

module.exports.getTodos = async(req, res) =>{
    try {
        const data = await todoModel.getTodos();
        res.status(200).json(data);
    } 
    catch (err) {
        console.log(err);
    }
}

module.exports.createTodo = async(req, res) =>{
    const { name } = req.body;

    try {
        const data = await todoModel.createTodo({ name });
        if(!data.success){
            return res.status(400).json({ success: false, msg: 'Not created' });
        }
        res.status(201).json({ success: true, todos: data.todos });
    } 
    catch (err) {
        console.log(err);
    }
}

module.exports.deleteTodos = async(req, res) =>{
    try {
        const data = await todoModel.deleteTodos();
        if(!data.success){
            return res.status(400).json({ success: false, msg: 'Delete failed' });
        }
        res.status(200).json({ success: true, todos: data.todos });
    } 
    catch (err) {
        console.log(err);
    }
}

module.exports.updateTodo = async(req, res) =>{
    const { id } = req.params;
    const { isCompleted } = req.body;

    try {
        const data = await todoModel.updateTodo({isCompleted, id});
        if(!data.success){
            return res.status(400).json({ success: false, msg: 'Update failed' });
        }
        res.status(200).json({ success: true, todos: data.todos });
    } 
    catch (err) {
        console.log(err);
    }
}

module.exports.deleteTodo = async(req, res) =>{
    const { id } = req.params;

    try {
        const data = await todoModel.deleteTodo(id);
        if(!data.success){
            return res.status(400).json({ success: false, msg: 'Delete failed' });
        }
        res.status(200).json({ success: true, todos: data.todos });
    } 
    catch (err) {
        console.log(err);
    }
}