// Only show band specific questions if the user is creating a new band profile.
if($("#bandOrFan.value") === "fan") {
  $("#bandForm").hide();
}
else {
  $("#bandForm").show();
}

// Checks if authorized user is a member
function isMember(token) {
  // Search the login table for the user's google auth token
  $.get("/api/login/", function(data) {
    for (i = 0; i < data.length; i++) {
      // If they are in the database, send them to the index path to determine if they are
      // a band or a fan
      if(token === data[i].auth_id) {
        return true;
      }
    }
    return false;
  });
}