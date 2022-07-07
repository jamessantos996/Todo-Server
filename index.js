require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

const todoRoutes = require('./routes/todoRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server Listening on port ${PORT}`);
});