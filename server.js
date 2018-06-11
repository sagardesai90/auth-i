const express = require('express');
const mongoose = require('mongoose');

const User = require('./userModel.js');

mongoose.connect('mongodb://localhost/users')
.then(() => {
    console.log('/n*** connected to database ***\n')
})

const server = express();

server.use(express.json());


//Routes
server
.get('/', (req,res) => {
    res.status(200).json({ api: "running.." })
});

server
.post('/api/register', (req, res) => {
User
.create(req.body).then(user => {
    res.status(201)
    res.json(user);
}).catch(err => {
    res.status(500).json({ message: "There has been an error."})
});
})

server
.post('/api/login', (req, res) => {

User
const { username, password } = req.body;

})



//End Routes

server.listen(8000, () => {
    console.log('/n*** API running on port 8k ***\n');
});