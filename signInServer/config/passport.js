var GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const User = require("../dataTypes/User.model");

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    callbackURL: "/oauth/google/callback"
  },
  async function(accessToken, refreshToken, profile, callback) {
    // console.log(profile);
    const googleUser = profile._json
    if (googleUser) {
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
    }
    callback(null, profile);
  }
));

passport.serializeUser(function(user, callback) {
  // can initialize session here
  callback(null, user);
});

passport.deserializeUser(function(user, callback) {
  callback(null, obj);
});