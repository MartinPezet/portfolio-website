
module.exports = {
    googleOAuthHandler: async (req, res) =>{
        try {
            // Get the code from the query string
            const code = req.query.code;

            //Get token with code (api call)
            const tokens = await require('./GoogleOAuth.controller').getGoogleOAuthTokens({code:code});

            //Get user with token (api call)
            const googleUser = await require('./GoogleOAuth.controller').getGoogleUserFromAccessToken({access_token:tokens.access_token}, {id_token:tokens.id_token});
            console.log(googleUser);

            //Update user in DB
            

            //create Session
            if (googleUser) {
                req.session.authenticated = true;
                req.session.user = googleUser;
                res.json(req.sessionID);
            } else {
                res.send("No Google User");
            }

            //Redirect to client
            //res.send(req.session);
            //res.redirect('/oauth');
        } catch(err){
            console.log(err);
            res.redirect('/error');
        }
    },

    sessionLogout: async (req, res) =>{
        if(req.session){
            req.session.destroy();
        }

        res.redirect('/');
    }
};