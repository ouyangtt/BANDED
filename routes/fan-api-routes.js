var db = require("../models");
<<<<<<< HEAD
// Join with band  events and genre taables
module.exports = function(app) {
	app.get("/api/fan/", function(req, res) {
    db.Fan.findAll({}).then(function(dbFan) {
        res.json(dbFan);
=======
// Join with band  events and genre tables
module.exports = function(app) {
	app.get("/api/fan/", function(req, res) {
    db.Fan.findAll({}).then(function(data) {
      var hbsObject = {
        fans: data
      }
        res.render("index", hbsObject);
>>>>>>> parent of 2505213... delete
      });
  });

	app.get("/api/fan/:id", function(req, res) {
    db.Fan.findOne({
        where: {
          id: req.params.id
        }
      })
<<<<<<< HEAD
      .then(function(dbFan) {
        res.json(dbFan);
=======
      .then(function(data) {
        var hbsObject = {
          fan: data
        }
        res.render("index", hbsObject);
>>>>>>> parent of 2505213... delete
      });
  });

	app.post("/api/fan", function(req, res) {
    console.log(req.body);
    db.Fan.create({
<<<<<<< HEAD
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
=======
        auth_id: req.body.authi_id,
        name: req.body.name,
        email: localStorage.email,
        pic_url: req.body.pic_url,
        locale: req.body.locale,
      })
      .then(function(data) {
        var hbsObject = {
          fan: data
        }
        res.render("index", hbsObject);
      });
  });

	app.put("/api/fan/:id/:pic_name", function(req, res) {
    db.Fan.update(req.body, {
      pic_url: "/assets/images/users" + req.params.pic_name,
      where: {
      id: req.params.id
      }
    })
      .then(function(data) {
        var hbsObject = {
          fan: data
        }
        res.render("index", hbsObject);
>>>>>>> parent of 2505213... delete
      });
  });

  app.delete("/api/fan/:id", function(req, res) {
    db.Fan.destroy({
        where: {
          id: req.params.id
        }
      })
<<<<<<< HEAD
      .then(function(dbFan) {
        res.json(dbFan);
      });
  });
};
=======
      .then(function(data) {
        window.location.replace("/");
      });
  });
};
>>>>>>> parent of 2505213... delete
