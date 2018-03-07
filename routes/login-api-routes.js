var db = require("../models");

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
        var hbsObject = {
          login: data
        }
          res.render("login", hbsObject);
        });
  });

	app.post("/api/login", function(req, res) {
    console.log(req.body);
    db.Login.create({
        auth_id: req.body.auth_id,
        is_band: req.body.is_band,
        u_id: req.body.u_id,
      })
      .then(function(data) {
        var hbsObject = {
          login: data
        }
          res.render("index", hbsObject);
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
};