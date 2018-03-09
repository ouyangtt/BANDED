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


var loc_id;
require('../public/assets/js/passport.js')(passport);

app.get('/auth/google', passport.authenticate('google', { scope : ['https://www.googleapis.com/auth/plus.login','email']  }));

    // the callback after google has authenticated the user
app.get( '/auth/google/callback', 
    passport.authenticate( 'remote_user', { 
        
        successRedirect: '/api/login',
        failureRedirect: '/api/login/:code' 
        
}));
console.log("passport.profile: " );
};


// Uses the JavaScript client library.

// This sample assumes a client object has been created.
// To learn more about creating a client, check out the starter:
//  https://developers.google.com/+/quickstart/javascript
// var request = gapi.client.plus.people.get({
//   'userId' : 'me'
// });

// request.execute(function(resp) {
//   console.log('ID: ' + resp.id);
//   console.log('Display Name: ' + resp.displayName);
//   console.log('Image URL: ' + resp.image.url);
//   console.log('Profile URL: ' + resp.url);
// });