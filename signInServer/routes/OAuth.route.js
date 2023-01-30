const express = require('express');
const router = express.Router();

const GoogleController = require('../controllers/GoogleOAuth.controller');
const SessionController = require('../controllers/Session.controller');


router.get('/', function(req, res, next) {
    res.json({"message": "Hello OAuth"});
});

router.get('/google', GoogleController.getGoogleOAuthURL);

router.get('/google/callback', SessionController.googleOAuthHandler);

module.exports = router;