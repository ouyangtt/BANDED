var db = require("../models");

module.exports = function(app) {
	app.get("/api/login/", function(req, res) {
    db.Login.findAll({}).then(function(dbLogin) {
        res.json(dbLogin);
      });
  });

	app.get("/api/login/:auth_id", function(req, res) {
    db.Login.findOne({
        where: {
          auth_id: req.params.auth_id
        }
      })
      .then(function(dbLogin) {
        res.json(dbLogin);
      });
  });

	app.post("/api/login", function(req, res) {
    console.log(req.body);
    db.Login.create({
        auth_id: req.body.auth_id,
        band_id: req.body.band_id,
        fan_id: req.body.fan_id,
      })
      .then(function(dbLogin) {
        res.json(dbLogin);
      });
  });

// 	app.put("/api/login", function(req, res) {
//     db.Login.update(req.body, {
//         where: {
//           auth_id: req.body.auth_id
//         }
//       })
//       .then(function(dbLogin) {
//         res.json(dbLogin);
//       });
//   });
// };