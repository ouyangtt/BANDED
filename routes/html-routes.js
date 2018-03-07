var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req,res) {
    db.findAll(function(data) {
      var hbsObject = {
        login: login
      };
    });
  });

};