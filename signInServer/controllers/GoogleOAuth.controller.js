const fetch = import('node-fetch');

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

        console.log(queryStrings);

        res.redirect(`${baseURL}?${queryStrings}`);
        
    },



    getGoogleOAuthTokens: async (req, res, next) => {
        const url = "https://oauth2.googleapis.com/token";

        const values = {
            code,
            client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
            client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
            redirect_uri: "http://localhost:3001/oauth/google/callback",
            grant_type: "authorization_code"
        };

        try {
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                }
            })

            return res.data;
        } catch (err) {
            logger.error(err, "Failed to get Google OAuth tokens");
            throw new Error(err);
        }
    },
}
