const express = require('express');
const dotenv = require('dotenv').config(); // For using the environment variables
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./initDB')();

// Session Initialisation
app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
    saveUninitialized: false,
    resave: true
}));

// Shows where deprecations are within the application
process.on('warning', (warning) => {
    console.log(warning.stack);
});

// Connection Test
app.get("/test/", (req, res, next) => {
    res.json({message: 'Test worked', session: req.session});
});

//TEMP Error redirect
app.get("/error/", (req, res, next) => {
    res.send("An error occurred");
});

// User Route
const UserRoute = require('./routes/User.route');
app.use("/users", UserRoute);

// Auth Route
const OAuthRoute = require('./routes/OAuth.route');
app.use("/oauth", OAuthRoute);




const PORT = process.env.PORT;

app.listen(PORT, console.log("Server listening port", PORT));