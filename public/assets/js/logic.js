$(document).ready(function() {
  $("#loginBtn").on("click", function(event) {
    var member = isMember(authToken);
    // If the user is in the database, send them to the index route to see if they are a band or fan
    if (member) {
      document.location.href = "/index";
    }
    // If the user is not in the database, send the user to the make profile route (static html?).
    else {
      document.location.href = "/makeProfile";
    }
  });

  // Checks if authorized user is a member
  function isMember(Token) {
    // Search the login table for the user's google auth token
    $.get("/api/login/", function(data) {
      for (i = 0; i < data.length; i++) {
        // If they are in the database, send them to the index path to determine if they are
        // a band or a fan
        if(Token === data[i].auth_id) {
          return true;
        }
      }
      return false;
    });
  }
});
