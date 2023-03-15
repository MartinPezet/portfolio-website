const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get('/google', passport.authenticate("google", {scope:["profile", "email"]}))

router.get('/google/callback', passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/login/failed",
}));

router.get('/login/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: "Failed"
    });
});

router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "Logged In",
            user: req.user
        });
    }
});

router.get('/logout', (req, res) => {
    req.logOut(function(err) {
        if (err) return next(err)
        res.redirect('http://localhost:3000/');
    });
});

module.exports = router;