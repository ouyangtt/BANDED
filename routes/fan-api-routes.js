var db = require("../models");

module.exports = function(app) {
	app.get("/api/fan/", function(req, res) {
    db.Fan.findAll({}).then(function(dbFan) {
        res.json(dbFan);
      });
  });

	app.get("/api/fan/:name", function(req, res) {
    db.Fan.findOne({
        where: {
          name: req.params.name
        }
      })
      .then(function(dbFan) {
        res.json(dbFan);
      });
  });

	app.post("/api/fan", function(req, res) {
    console.log(req.body);
    db.Fan.create({
        name: req.body.name,
        email: req.body.email,
        pic_url: req.body.pic_url,
        locale: req.body.locale,
      })
      .then(function(dbFan) {
        res.json(dbFan);
      });
  });

	app.put("/api/fan", function(req, res) {
    db.Fan.update(req.body, {
        where: {
          name: req.body.name
        }
      })
      .then(function(dbFan) {
        res.json(dbFan);
      });
  });

  app.delete("/api/fan/:email", function(req, res) {
    db.Fan.destroy({
        where: {
          email: req.params.email
        }
      })
      .then(function(dbFan) {
        res.json(dbFan);
      });
  });
};