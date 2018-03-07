var db = require("../models");

module.exports = function(app) {
	app.get("/api/band/", function(req, res) {
    db.Band.findAll({}).then(function(data) {
      var hbsObject = {
        bands: data
      }
        res.render("index", hbsObject);
      });
  });

	app.get("/api/band/:name", function(req, res) {
    db.Band.findOne({
        where: {
          name: req.params.name
        }
      })
      .then(function(data) {
        var hbsObject = {
          band: data
        }
          res.render("index", hbsObject);
        });
  });

	app.post("/api/band", function(req, res) {
    console.log(req.body);
    db.Band.create({
        name: req.body.name,
        pic_url: req.body.pic_url,
        bio: req.body.bio,
        twitter: req.body.twitter,
        facebook: req.body.facebook,
        instagram: req.body.instagram,
        bandcamp: req.body.bandcamp,
        locale: req.body.locale,
      })
      .then(function(data) {
        var hbsObject = {
          bands: data
        }
          res.render("index", hbsObject);
        });
  });

	app.put("/api/band", function(req, res) {
    db.Band.update(req.body, {
        where: {
          name: req.body.name
        }
      })
      .then(function(data) {
        var hbsObject = {
          bands: data
        }
          res.render("index", hbsObject);
        });
  });
};
