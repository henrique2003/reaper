document.addEventListener("DOMContentLoaded", function() {
  var navButton = document.getElementById("nav_toggle");
  var navUl = document.getElementById("toggle_nav");
  var header = document.getElementById("header");

  navButton.addEventListener("click", show)

  function show() {
    navUl.classList.toggle("show_ul");
    console.log(header)
    header.classList.toggle("opacity");
  }
});