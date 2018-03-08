var db = require("../models");

var path = require("path");
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


module.exports = function(app) {
	app.get("/api/login/", function(req, res) {
    db.Login.findAll({}).then(function(data) {
      var hbsObject = {
        logins: data
      }
        res.render("login", hbsObject);
      });
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

app.get('/auth/google', passport.authenticate('google', { scope : ['profile','email','youtube','calendar']  }));

    // the callback after google has authenticated the user
app.get( '/auth/google/callback', 
    passport.authenticate( 'google', { 
        successRedirect: '/',
        failureRedirect: '/api/login/:' + passport.profile
}));
};