const express = require('express');
const router = express.Router();

const UserController = require('../controllers/User.controller');

router.get("/", UserController.getAllUsers);

router.post("/", UserController.createUser);

router.get("/:id", UserController.findUserById);

router.get("/username/:userName", UserController.findUserByUsername);

module.exports = router;