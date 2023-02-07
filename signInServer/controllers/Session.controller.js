const mongoose = require("mongoose");
const User = require("../dataTypes/User.model");


module.exports = {
    googleOAuthHandler: async (req, res) =>{
        try {
            // Get the code from the query string
            const code = req.query.code;
            console.log(code);

            //Get token with code (api call)
            const tokens = await require('./GoogleOAuth.controller').getGoogleOAuthTokens({code:code});

            //Get user with token (api call)
            const googleUser = await require('./GoogleOAuth.controller').getGoogleUserFromAccessToken({access_token:tokens.access_token}, {id_token:tokens.id_token});

            // Valid Reponse
            if (googleUser) {
                //create Session
                req.session.authenticated = true;
                req.session.user = googleUser;

                //Update user in DB
                const body = {
                    authType: "google",
                    displayName: googleUser.given_name,
                    name: googleUser.name,
                    email: googleUser.email,
                    permissionLevel: 1,
                    pictureLink: googleUser.picture
                }

                const UserController = require("../controllers/User.controller");

                //If user is not up to date
                const dbUser = await User.findOne({ authType:body.authType, email:body.email });
                if (dbUser) {
                    if (dbUser.displayName != body.displayName || dbUser.name != body.name || dbUser.pictureLink != body.pictureLink) {
                        body.permissionLevel = dbUser.permissionLevel;
                        // Update user in db
                        const res = UserController.updateUser({body}, {id:dbUser.id});
                        console.log(res);
                    } else {
                        console.log("User is up to date: " + body.displayName);
                    }
                } else {
                    // If user doesn't exist
                    const res = UserController.createUser({body:body});
                    console.log("New user created: " + body.displayName);
                }

            } else {
                res.send("No Google User: " + body.displayName);
            }

            // Redirect to client
            // res.send(req.session);
            res.redirect('http://localhost:3000');
        } catch(err){
            console.log(err);
            res.redirect('/error');
        }
    },

    getCurrentSession: async (req, res) => {
        res.json(req.session.user);
    },

    sessionLogout: async (req, res) =>{
        if(req.session){
            req.session.destroy();
        }

        res.redirect('/');
    },

    getAllSessions: async (req, res) =>{
        try {
            const sessionModel = mongoose.model("session", new mongoose.Schema({}));
            const allSessions = sessionModel.find({}, { __v:0 });
            //console.log(allSessions);
            res.send("Worked");
        }catch (err) {console.log(err);}
    },
};