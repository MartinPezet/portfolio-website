const axios = require('axios');

module.exports = {
    getGoogleOAuthURL: async (req, res, next) => {

        const baseURL = "https://accounts.google.com/o/oauth2/v2/auth";

        const options = {
            redirect_uri: "http://localhost:3001/oauth/google/callback",
            client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
            access_type: "offline",
            response_type: "code",
            prompt: "consent",
            scope: [
                "https://www.googleapis.com/auth/userinfo.profile",
                "https://www.googleapis.com/auth/userinfo.email"
            ].join(" ")
        };

        const queryStrings = new URLSearchParams(options);

        res.redirect(`${baseURL}?${queryStrings}`);
        
    },



    //Helper functions for Google OAuth

    getGoogleOAuthTokens: async ({code:code}) => {
        const url = "https://oauth2.googleapis.com/token";

        const values = {
            code,
            client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
            client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
            redirect_uri: "http://localhost:3001/oauth/google/callback",
            grant_type: "authorization_code"
        };

        try {
            const res = await axios.post(url, values, {
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                }
            });

            return res.data;
        } catch (err) {
            console.log("Failed to get Google OAuth tokens");
            throw new Error(err);
        }
    },

    getGoogleUserFromAccessToken: async (access_token, id_token) => {
        try {
            //console.log(access_token.access_token);
            
            const baseUrl = "https://www.googleapis.com/oauth2/v3/userinfo";
            const url = `${baseUrl}?alt=json&access_token=${access_token.access_token}`;
            const user = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${id_token.id_token}`

                }
            });
            return user.data;

        } catch (err) {
            console.log("Failed to get Google user");
            throw new Error(err);
        }
    },
}
