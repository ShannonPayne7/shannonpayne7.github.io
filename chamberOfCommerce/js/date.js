
//date last modified
let updateDate = document.lastModified;
document.getElementById("dateModified").innerHTML = "Last updated " + updateDate;

//copyright current year
let myDate = new Date();
let currentYear = myDate.getFullYear();
document.getElementById("demo").innerHTML = currentYear;

//toggle menu button
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");

  if (document.getElementById("primaryNav").className == "hide") {
    document.getElementById("menuButton").innerHTML = "&#9776;";
  } else {
    document.getElementById("menuButton").innerHTML = "&#10006;";
  }
}