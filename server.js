var express = require("express");
var bodyParser = require("body-parser");
var fileUpload = require('express-fileupload');
// setup passport
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('./passport');
var fileUpload = require('express-fileupload');

// Set up express
var PORT = process.env.PORT || 8000;
var app = express();

// Require models for syncing
var db = require("./models");

// Makes directory static to /public
app.use(express.static("public"));

// Set up express with body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Set up Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes for the server to access
var routes = require("./routes/band-api-routes.js");
var routes = require("./routes/fan-api-routes.js");
var routes = require("./routes/login-api-routes.js");
var routes = require("./routes/upload-api-routes.js");

// Sync sequelize models and start Express app
db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// app.use("/", routes);