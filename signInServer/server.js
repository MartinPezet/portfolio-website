var express = require('express');
const UserController = require('./controllers/User.controller');
var dotenv = require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./initDB')();

app.get("/", (req, res, next) => {
    res.json({message: 'Test worked'});
});

app.get("/users", UserController.getAllUsers);

const PORT = process.env.PORT;

app.listen(PORT, console.log("Server listening port", PORT));