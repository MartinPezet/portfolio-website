const express = require('express');
const router = express.Router();

const UserController = require('../controllers/User.controller');

router.get("/:id", UserController.findUserById);

router.get("/username/:userName", UserController.findUserByUsername);

router.delete("/:id", UserController.deleteUser);

module.exports = router;