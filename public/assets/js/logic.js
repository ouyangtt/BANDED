$(document).ready(function() {
  $("#loginBtn").on("click", function(event) {
    
  });

  // Checks if authorized user is a member
  function isMember() {
    $.get("/api/login/", function(data) {
      for (i = 0; i < data.length; i++) {
        if(googleAUthToken === auth_id) {

        }
      }
    });
  }
});
  
