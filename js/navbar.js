document.addEventListener("DOMContentLoaded", function() {
  var navButton = document.getElementById("nav_toggle");
  var navUl = document.getElementById("toggle_nav");
  var header = document.getElementById("header");
  var navlink1 = document.getElementById("nav_link_1");
  var navlink2 = document.getElementById("nav_link_2");
  var navlink3 = document.getElementById("nav_link_3");
  var navlink4 = document.getElementById("nav_link_4");
  var navlink5 = document.getElementById("nav_link_5");

  navButton.addEventListener("click", show)
  navlink1.addEventListener("click", show)
  navlink2.addEventListener("click", show)
  navlink3.addEventListener("click", show)
  navlink4.addEventListener("click", show)
  navlink5.addEventListener("click", show)

  function show() {
    navUl.classList.toggle("show_ul");
    header.classList.toggle("opacity");
  }
});