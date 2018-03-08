var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var express = require("express");
var bodyParser = require("body-parser");

// Set up express
var PORT = process.env.PORT || 8000;
var app = express();


// Makes directory static to /public
app.use(express.static("public"));

// Set up express with body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: "326433976152-kqhp9718ameli659tkp250657m3m0bri.apps.googleusercontent.com",
    clientSecret: "cuEQIFtvGdGmP18CQxWsx0bu",
    callbackURL: "http://localhost:8000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
));