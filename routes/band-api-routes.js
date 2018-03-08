var db = require("../models");

module.exports = function(app) {
	app.get("/api/band/", function(req, res) {
    db.Band.findAll({}).then(function(data) {
      var hbsObject = {
        bands: data
      };
        res.render("index", hbsObject);
      });
  });

	app.get("/api/band/:id", function(req, res) {
    db.Band.findOne({
        where: {
          name: req.params.name
        }
      })
      .then(function(data) {
        // console.log(data);
        var hbsObject = {
          band: data
        };
          res.render("index", hbsObject);
        });
  });

	app.post("/api/band", function(req, res) {
    console.log(req.body);
    db.Band.create({
        auth_id: req.body.auth_id,
        email: req.body.email, 
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
        if(data){
          window.location.redirect("api/login/:" + data.auth_id);
        }
        var hbsObject = {

          band: data
        }
        
          res.render("index", hbsObject);
        });
  });

	app.put("/api/band/:id/:pic_name", function(req, res) {
    db.Band.update(req.body, {
        
          pic_url: "/assets/images/users" + req.params.pic_name,
          where: {
          id: req.params.id
          }
        }
      )
      .then(function(data) {
        var hbsObject = {

          band: data
        }

          res.render("index", hbsObject);
        });
  });
};

