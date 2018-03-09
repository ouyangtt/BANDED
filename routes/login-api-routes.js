var db = require("../models");

var path = require("path");
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// var profile = require("/assets/js/passport.js");


module.exports = function(app) {
	app.get("/api/login/", function(req, res) {
    db.Login.findAll({}).then(function(data) {
      var hbsObject = {
        logins: data
      }
        res.render("login", hbsObject);
      });
  });

  app.get("/", function(req, res) {
    
        res.render("login");
      });

	app.get("/api/login/:auth_id", function(req, res) {
    db.Login.findOne({
        where: {
          auth_id: req.params.auth_id
        }
      })
      .then(function(data) {
        if(data){
          if(data.band_id !== null){
            res.render("/api/band/:auth_id");
          } else{
            res.render("/api/fan/:auth_id");
          }
        } else {
          res.render("createProfile");
        }
          
        });
  });

	app.post("/api/login/:auth_id", function(req, res) {
    console.log(req.body);
    db.Login.create({
        auth_id: req.body.auth_id,
        is_band: req.body.is_band,
        u_id: req.body.u_id,
      })
      .then(function(data) {
        res.render("createProfile");
      });
  });

	app.put("/api/login", function(req, res) {
    db.Login.update(req.body, {
        where: {
          auth_id: req.body.auth_id
        }
      })
      .then(function(data) {
        var hbsObject = {
          login: data
        }
          res.render("login", hbsObject);
        });
  });

 // Each of the below routes just handles the HTML page that the user gets sent to.

// passport.use(new GoogleStrategy({}, passport.serializeUser(function(user, done){})));

// passport.deserializeUser(function(id, done) { });

// function(token, refreshToken, profile, done) { };

////////////////////////////////////////////////////
// GEt keys to the kingdom
/////////////////////////////////////////////////


// // var loc_id;
// require('../public/assets/js/passport.js')(passport);

// app.get('/auth/google', passport.authenticate('google', { scope : ['profile','email']  }));

//     // the callback after google has authenticated the user
// app.get( '/auth/google/callback', 
//     passport.authenticate( 'remote_user', { 
        
//         successRedirect: '/api/login',
//         failureRedirect: '/api/login/:code' 
        
// }));
// console.log("passport.profile: " + passport.profile  );
// };


// load all the things we need
const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// load up the user model
// var User       = require('./User.js');

// load the auth variables
// var configAuth = require('./auth');

module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
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
            User.findOne({ 'google.id' : profile.id }, function(err, user) {
                if (err)
                    return done(err);

                if (user) {

                    // if a user is found, log them in
                    return done(null, user);
                } else {
                    // if the user isnt in our database, create a new user
                    // var newUser          = new User();

                    // set all of the relevant information
                    // newUser.google.id    = profile.id;
                    // newUser.google.token = token;
                    // newUser.google.name  = profile.displayName;
                    // newUser.google.email = profile.emails[0].value; // pull the first email

                    // // save the user
                    // newUser.save(function(err) {
                    //     if (err)
                    //         throw err;
                    //     return done(null, newUser);
                    // });
                }
            });
        });
        console.log(profile);
        console.log("success");
        done(null, false);
    }))
}