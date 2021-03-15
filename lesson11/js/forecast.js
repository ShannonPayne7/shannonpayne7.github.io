const appID = "70d5699f094618095ca99927b544bc2c";

//weather summary
// Preston id=5604473
//Soda Springs id=5607916
//Fish Haven id=5585010
function weatherSummary(cityID) {
  const apiURL =
    "https://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&units=imperial&appid=" +
    appID;
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);

      const current =
        jsObject.weather[0].main + " " + Math.round(jsObject.main.temp);
      document.getElementById("current").textContent = current;
      document.getElementById("temperature").textContent = Math.round(
        jsObject.main.temp_max
      );
      document.getElementById("low").textContent = Math.round(
        jsObject.main.temp_min
      );
      document.getElementById("windchill").innerText = windChill(
        jsObject.main.temp_max,
        jsObject.wind.speed
      );
      document.getElementById("humidity").textContent = jsObject.main.humidity;
      document.getElementById("windspeed").textContent = Math.round(
        jsObject.wind.speed
      );
    });
}

//compute windchill
function windChill(tempF, speed) {
  if (tempF > 50 || speed <= 3) {
    return "n/a";
  }
  let calculate =
    35.74 +
    0.6215 * tempF -
    35.75 * speed ** 0.16 +
    0.4275 * tempF * speed ** 0.16;
  return calculate.toFixed(0);
}

//five day forecast
//Preston id=5604473
//Soda Springs id=5607916
//Fish Haven id=5585010
function fiveDayForecast(cityID) {
  const apiForecastURL =
    "https://api.openweathermap.org/data/2.5/forecast?id=" +
    cityID +
    "&units=imperial&appid=" +
    appID;
  fetch(apiForecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
      let forecast = document.getElementById("forecast");

      const datafilter = jsObject.list.filter((x) =>
        x.dt_txt.includes("18:00:00")
      );

      let i = 1;
      datafilter.forEach((day) => {
        document.getElementById("day" + i).textContent = getDayOfWeek(day.dt);
        let imagesrc =
          "https://openweathermap.org/img/wn/" +
          day.weather[0].icon +
          "@2x.png";
        document.getElementById("icon" + i).setAttribute("src", imagesrc);
        document
          .getElementById("icon" + i)
          .setAttribute("alt", day.weather[0].description);
        document.getElementById("temp" + i).textContent =
          Math.round(day.main.temp) + " ℉";
        i++;
      });
    });
}

function getDayOfWeek(dt) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const timestamp = dt * 1000;
  let dtDate = new Date(timestamp);
  return days[dtDate.getDay()];
}
