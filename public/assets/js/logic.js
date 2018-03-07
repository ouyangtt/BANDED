// Only show band specific questions if the user is creating a new band profile.
if($("#bandOrFan.value") === "fan") {
  $("#bandForm").hide();
}
else {
  $("#bandForm").show();
}