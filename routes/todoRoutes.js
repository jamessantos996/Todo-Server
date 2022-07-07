const express = require('express');
const router = express.Router();

const { getTodos, createTodo, deleteTodos, updateTodo, deleteTodo } = require('../controllers/todoController')

router.get('/', getTodos);
router.post('/', createTodo);
router.delete('/', deleteTodos);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;