const express = require('express');
const dotenv = require('dotenv').config(); // For using the environment variables

const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const passportSetup = require('./config/passport');

const app = express();
const cors = require('cors');
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
        origin: 'http://localhost:3000',
        methods: 'GET,PUT,POST,DELETE',
        credentials: true
    }
));

require('./config/initDB')();

// Session Initialisation
app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
    saveUninitialized: false,
    resave: true,
    store: MongoStore.create({ 
        mongoUrl: process.env.MONGO_STORE_URI,
        touchAfter: 24 * 60 * 60, // 24 Hours between auto touch
    })
}));

// Shows where deprecations are within the application
process.on('warning', (warning) => {
    console.log(warning.stack);
});

// Passport Init
app.use(passport.initialize());
app.use(passport.session());


// ------------------------------- ROUTES ------------------------------- //

// Connection Test
app.get("/test/", (req, res, next) => {
    console.log(req.sessionID);
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


// ------------------------------- START SERVER ------------------------------- //

app.listen(PORT, console.log("Server listening port", PORT));