var db = require("../models");

/// Find all bands and join fans and events
module.exports = function(app) {
	app.get("/api/band/", function(req, res) {
    db.Band.findAll({}).then(function(dbBand) {
        res.json(dbBand);
      });
  });

	app.get("/api/band/:id", function(req, res) {
    db.Band.findOne({
        where: {
          name: req.params.id
        }
      })
      .then(function(dbBand) {
        res.json(dbBand);
      });
  });

	app.post("/api/band", function(req, res) {
    console.log(req.body);
    db.Band.create({
        name: req.body.name,
        email: Pull.LOCAL.STORAGE,
        pic_url: req.body.pic_url,
        bio: req.body.bio,
        twitter: req.body.twitter,
        facebook: req.body.facebook,
        instagram: req.body.instagram,
        bandcamp: req.body.bandcamp,
        locale: req.body.locale,
      })
      .then(function(dbBand) {
        res.json(dbBand);
      });
  });

	app.put("/api/band", function(req, res) {
    db.Band.update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbBand) {
        res.json(dbBand);
      });
  });
};