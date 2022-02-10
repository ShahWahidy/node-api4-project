const express = require('express');
const server = express();

require('dotenv').config();

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log('Port Started');
})

server.use('*', (req, res) => {
    res.send('<h1>Hello world from Heroku</h1>')
})