require('dotenv').config();
const express = require('express');
const server = express();

const PORT = process.env.PORT;

server.use(express.json());



server.get('/api/users', (req, res) => {
    res.json({
        users: ['John' , 'Doe', 'Jane', 'Jim']
    })
})

server.post('/api/register', (req, res) => {
    username: req.body.username
    password: req.body.password
})

server.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password){
        res.json({
            message: `hello: ${username}`
        })
    }
})

server.listen(PORT, () => {
    console.log('Port Started');
})

server.use('*', (req, res) => {
    res.send('<h1>Hello world from Heroku</h1>')
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message:err.message,
        stack: err.stack
    })
})

