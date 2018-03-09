var passport = require("passport.js");

$(document).ready(function() {

  // Send the user to the fan create profile page
  $("#fanBtn").on("click", function(event) {
    event.preventDefault();
    window.location.replace("/api/create/fan");
  });

  // Send the user to the band create profile page
  $("#bandBtn").on("click", function(event) {
    event.preventDefault();
    window.location.replace("/api/create/band");
  });

  // When user clicks submit button send post to DB to save profile
  $("#fanSubmit").on("click", function(event) {
    event.preventDefault();
    var newFan = {
      auth_id: "89jd89f", ///profile.id,
      email: "piurew804ru", ///profile.emails[0].value,
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

$("#bandSubmit").on("click", function(event) {
  event.preventDefault();
  var newBand = {
    auth_id: "89jd89f",
    email: "piurew804ru",
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