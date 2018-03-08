// load all the things we need
const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// load up the Login model
var Login = require('./models/login.js');



module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(login, done) {
        done(null, login.id);
    });

    // used to deserialize the user
    passport.deserializeLogin(function(id, done) {
        Login.findById(id, function(err, login) {
            done(err, login);
        });
    });



    // =========================================================================
    // GOOGLE ==================================================================
    // =========================================================================
  passport.use(new GoogleStrategy({
    clientID: "326433976152-kqhp9718ameli659tkp250657m3m0bri.apps.googleusercontent.com",
    clientSecret: "cuEQIFtvGdGmP18CQxWsx0bu",
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  

  function (token, refreshToken, profile, done) {
    // async (token, refreshToken, profile, done) => {

        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        process.nextTick(function() {

            // try to find the user based on their google id
            Login.findOne({ 'auth_id' : profile.id }, function(err, login) {
                if (err)
                    return done(err);

                if (login) {

                    // if a login is found, log them in
                    return done(null, login);
                } else {
                    // if the login isnt in our database, create a new login
                    var newLogin          = new Login();

                    // set all of the relevant information
                    newLogin.auth_id    = profile.id;
                    // newLogin.google.token = token;
                    // newLogin.google.name  = profile.displayName;
                    // newLogin.google.email = profile.emails[0].value; // pull the first email

                    // save the Login
                    newLogin.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newLogin);
                    });
                }
            });
        });

        console.log(profile);
        console.log("success");
        done(null, false);
    }));

}

