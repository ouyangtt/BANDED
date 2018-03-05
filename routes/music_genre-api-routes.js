var db = require("../models");

module.exports = function(app) {
	app.get("/api/music_genre/", function(req, res) {
    db.MusicGenre.findAll({}).then(function(dbMusicGenre) {
        res.json(dbMusicGenre);
      });
  });

	app.get("/api/music_genre/:name", function(req, res) {
    db.MusicGenre.findOne({
        where: {
          name: req.params.name
        }
      })
      .then(function(dbMusicGenre) {
        res.json(dbMusicGenre);
      });
  });

	app.post("/api/music_genre", function(req, res) {
    console.log(req.body);
    db.MusicGenre.create({
        name: req.body.name,
        g_id: req.body.g_id,
      })
      .then(function(dbMusicGenre) {
        res.json(dbMusicGenre);
      });
  });

	app.put("/api/music_genre", function(req, res) {
    db.MusicGenre.update(req.body, {
        where: {
          name: req.body.name
        }
      })
      .then(function(dbMusicGenre) {
        res.json(dbMusicGenre);
      });
  });
};