const apiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=33.4152&lon=-111.8315&exclude=hourly,minutely&units=imperial&appid=70d5699f094618095ca99927b544bc2c";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let card = document.getElementById("currentWeather");
    let p1 =  document.createElement("p");
    let p2 =  document.createElement("p");
    p1.textContent = "Currently " + jsObject.current.weather[0].main + ", " + Math.round(jsObject.current.temp) + "°F";
    p2.textContent = "Humidity: " + jsObject.current.humidity + "%";
    card.appendChild(p1);
    card.appendChild(p2);
   threeDayForecast(jsObject.daily)
  });



//weather summary



//three day forecast

function threeDayForecast(daily) {
  for (let i = 0; i < 3; i++) {
    document.getElementById("day" + i).textContent = getDayOfWeek(daily[i].dt);
    document.getElementById("temp" + i).textContent =
      Math.round(daily[i].temp.day) + " ℉";
  }
}

function getDayOfWeek(dt) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const timestamp = dt * 1000;
  let dtDate = new Date(timestamp);
  return days[dtDate.getDay()];
}
