

module.exports = {
    googleOAuthHandler: async (req, res) =>{
        // Get the code from the query string
        const code = req.query.code;

        //Get user with token (api call)
        const user = await require('./GoogleOAuth.controller').getGoogleOAuthTokens(code);
        console.log(user);

        //Update user in DB

        //create Session

        //Redirect to client
    }
};