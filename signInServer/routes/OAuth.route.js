const express = require('express');
const router = express.Router();

const GoogleController = require('../controllers/GoogleOAuth.controller');

router.get('/', function(req, res, next) {
    res.json({"message": "Hello World"});
});

router.get('/google', GoogleController.getGoogleOAuthURL);

module.exports = router;