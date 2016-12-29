var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function () {
  passport.use(new GoogleStrategy({
      clientID: '443622544378-biklaaoig57hhrl4fm1egh85aj5v7a9i.apps.googleusercontent.com',
      clientSecret:'dZf0Gk-JC1R5aRWiwxmE6nrf',
      callbackURL: 'http://localhost:3000/auth/google/callback'},
      function(req, accessToken, refreshToken, profile, done){
        let user = {};
        user.email =profile.emails[0].value;
        user.image = profile._json.image.url;
        user.displayName = profile.displayName;
        user.google = {};
        user.google.id = profile.id;
        user.google.token = accessToken;
        console.log(user);
        done(null, user);
      }

  ));

};
