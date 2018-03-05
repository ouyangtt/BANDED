var db = require("../models");

module.exports = function(app) {
	app.get("/api/event/", function(req, res) {
    db.Event.findAll({}).then(function(dbEvent) {
        res.json(dbEvent);
      });
  });

	app.get("/api/event/:name", function(req, res) {
    db.Event.findOne({
        where: {
          name: req.params.name
        }
      })
      .then(function(dbEvent) {
        res.json(dbEvent);
      });
  });

	app.post("/api/event", function(req, res) {
    console.log(req.body);
    db.Event.create({
        name: req.body.name,
        time: req.body.time,
      })
      .then(function(dbEvent) {
        res.json(dbEvent);
      });
  });

	app.put("/api/event", function(req, res) {
    db.Event.update(req.body, {
        where: {
          name: req.body.name
        }
      })
      .then(function(dbEvent) {
        res.json(dbEvent);
      });
  });
};