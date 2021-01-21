//date last modified
let updateDate = document.lastModified;
document.getElementById("dateModified").innerHTML = "Last updated " + updateDate;

//copyright current year
let myDate = new Date();
let currentYear = myDate.getFullYear();
document.getElementById("demo").innerHTML = currentYear;