const express = require('express');
const router = express.Router();

const passport = require('passport');

const FRONTEND_BASE_URI = process.env.FRONTEND_BASE_URI

router.get('/google', passport.authenticate("google", {scope:["profile", "email"]}))

router.get('/google/callback', passport.authenticate("google", {
    successRedirect: FRONTEND_BASE_URI,
    failureRedirect: "/login/failed", // Can replace this with frontend URL and use the below fine
    // failureMesaage: "Authentication failed"
}));

router.get('/login/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: "Failed"
    });
});

router.get('/login/success', (req, res) => {
    if (req.user) {
        console.log(req.user.displayName, " accessed their data");
        res.status(200).json({
            success: true,
            message: "Logged In",
            user: req.user
        });
    } else {
        console.log("No req.user", req.user);
        res.status(401).json({
            message: "Not logged in"
        });
    }
}); // Get all session data from this endpoint and 

router.get('/logout', (req, res) => {
    req.logOut(function(err) {
        if (err) return next(err)
        res.redirect(FRONTEND_BASE_URI);
    });
});

module.exports = router;