// load all the things we need
// const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// load up the Login model
// var Login = require('./models/login.js');



module.exports = function(passport) {

   // =========================================================================
    // GOOGLE ==================================================================
    // =========================================================================
  passport.use(new GoogleStrategy({
    clientID: "326433976152-kqhp9718ameli659tkp250657m3m0bri.apps.googleusercontent.com",
    clientSecret: "cuEQIFtvGdGmP18CQxWsx0bu",
    callbackURL: "http://localhost:8000/api/login/:"
  },
  

  function (token, refreshToken, profile, done) {
    
        module.exports = profile;
        console.log("profile; " + profile);
        console.log("success");
        done(null, false);
    }));

}

