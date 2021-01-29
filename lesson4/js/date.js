//date last modified
let updateDate = new Date();
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; 
let months = ['January','February','March','April','May','June','July','August','September','October','November','December']; 

let weekDay = days[ updateDate.getDay() ]; 
let month = months[ updateDate.getMonth() ];
let dayOfMonth = updateDate.getDate();
let year = updateDate.getUTCFullYear();

document.getElementById("dateModified").innerHTML =
  "Last updated " + weekDay + ", " + month + " " + dayOfMonth + " " + year;

//copyright current year
let myDate = new Date();
let currentYear = myDate.getFullYear();
document.getElementById("demo").innerHTML = currentYear;

//toggle menu button
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}