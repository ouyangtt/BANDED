var db = require("../models");

module.exports = function(app) {
	app.get("/api/genre/", function(req, res) {
    db.Genre.findAll({}).then(function(dbGenre) {
        res.json(dbGenre);
      });
  });

	app.get("/api/genre/:name", function(req, res) {
    db.Genre.findOne({
        where: {
          name: req.params.name
        }
      })
      .then(function(dbGenre) {
        res.json(dbGenre);
      });
  });

	app.post("/api/genre", function(req, res) {
    console.log(req.body);
    db.Genre.create({
        name: req.body.name,
      })
      .then(function(dbGenre) {
        res.json(dbGenre);
      });
  });

	app.put("/api/genre", function(req, res) {
    db.Genre.update(req.body, {
        where: {
          name: req.body.name
        }
      })
      .then(function(dbGenre) {
        res.json(dbGenre);
      });
  });
};