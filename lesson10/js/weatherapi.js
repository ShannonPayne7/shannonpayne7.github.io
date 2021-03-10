const apiURL =
  "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=70d5699f094618095ca99927b544bc2c";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById("current-temp").textContent = jsObject.main.temp;

    const imagesrc =
      "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById("imagesrc").textContent = imagesrc; // informational specification only
    document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
    document.getElementById("icon").setAttribute("alt", desc);

    console.log(getDayOfWeek(jsObject.dt));
  });


  
function getDayOfWeek(dt) {
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; 
    const timestamp = dt * 1000;
    let dtDate = new Date(timestamp);
    return days[ dtDate.getDay() ]; 
}

// Call for Forecast
//http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=70d5699f094618095ca99927b544bc2c