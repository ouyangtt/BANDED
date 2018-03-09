// var passport = require("passport.js");

$(document).ready(function() {

  // Only show band specific questions if the user is creating a new band profile.
  $("#fanBtn").on("click", function() {
    res.render("bandCreate");
    $("#fanSubmit").on("click", function() {
      event.preventDefault();
      var newFan = {
        auth_id: passport.profile.id,
        email: passport.profile.emails[0].value,
        name: $("#name").val().trim(),
        locale: $("#locale").val().trim()
      };
      // Send POST for new profile
      $.ajax("/api/fan", {
        type: "POST",
        data: newFan
      }).then(
        function() {

        }
      );
    });
  });
  $("#bandBtn").on("click", function() {
    res.render("fanCreate");
    $("#bandSubmit").on("click", function() {
      event.preventDefault();
      var newBand = {
        auth_id: passport.profile.id,
        email: passport.profile.emails[0].value,
        name: $("#name").val().trim(),
        bio: $("#bio").val(),
        twitter: $("#twitter").val().trim(),
        facebook: $("#facebook").val().trim(),
        instagram: $("#instagram").val().trim(),
        bandcamp: $("#bandcamp").val().trim(),
        locale: $("#locale").val().trim()
      };
      // Send POST for new profile
      $.ajax("/api/band", {
        type: "POST",
        data: newBand
      }).then(
        function() {

        }
      );
    });
  });

});