var express = require('express');
var dotenv = require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./initDB')();

// Shows where deprecations are within the application
process.on('warning', (warning) => {
    console.log(warning.stack);
});

// Connection Test
app.get("/test/", (req, res, next) => {
    res.json({message: 'Test worked'});
});

// User Route
const UserRoute = require('./routes/User.route');
app.use("/users", UserRoute);

// Auth Route
const OAuthRoute = require('./routes/OAuth.route');
app.use("/oauth", OAuthRoute);




const PORT = process.env.PORT;

app.listen(PORT, console.log("Server listening port", PORT));