const fs = require('fs').promises;
const path = require('path');

module.exports.getTodos = async() =>{
    try {
        const rawData = await fs.readFile(path.join(__dirname, '../todo-data/todos.json'));
        const todos = JSON.parse(rawData);
        return todos;
    } 
    catch (err) {
        console.log(err);
    }
}

module.exports.createTodo = async({ name }) =>{
    const now = new Date();
    const formattedDate = now.toLocaleDateString();

    try {
        const rawData = await fs.readFile(path.join(__dirname, '../todo-data/todos.json'));
        const todos = JSON.parse(rawData);
        
        todos.push({ id: now, name, isCompleted: false, createdAt: formattedDate });

        await fs.writeFile(path.join(__dirname, '../todo-data/todos.json'), JSON.stringify(todos));
       
        return { success: true, todos }
    } 
    catch (err) {
        console.log(err);
    }
}

module.exports.deleteTodos = async() =>{

    try {
        const rawData = await fs.readFile(path.join(__dirname, '../todo-data/todos.json'));
        const todos = JSON.parse(rawData);
        
        const updatedTodos = todos.filter(todo =>{
            return !todo.isCompleted
        });

        await fs.writeFile(path.join(__dirname, '../todo-data/todos.json'), JSON.stringify(updatedTodos));

        return { success: true, todos: updatedTodos }
        
    } 
    catch (err) {
        console.log(err);
    }
}

module.exports.updateTodo = async({isCompleted, id}) =>{
    try {
        const rawData = await fs.readFile(path.join(__dirname, '../todo-data/todos.json'));
        const todos = JSON.parse(rawData);
        
        const updatedTodos = todos.map(todo =>{
            if(todo.id == id){
                return { ...todo, isCompleted }
            }
            return todo;
        });

        await fs.writeFile(path.join(__dirname, '../todo-data/todos.json'), JSON.stringify(updatedTodos));

        return { success: true, todos: updatedTodos }
        
    } 
    catch (err) {
        console.log(err);
    }
}

module.exports.deleteTodo = async(id) =>{
    try {
        const rawData = await fs.readFile(path.join(__dirname, '../todo-data/todos.json'));
        const todos = JSON.parse(rawData);
        
        const updatedTodos = todos.filter(todo =>{
            return todo.id != id;
        });

        await fs.writeFile(path.join(__dirname, '../todo-data/todos.json'), JSON.stringify(updatedTodos));

        return { success: true, todos: updatedTodos }
        
    } 
    catch (err) {
        console.log(err);
    }
}