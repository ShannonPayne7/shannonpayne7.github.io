const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    const events =  document.getElementById("events");
    const city = events.innerHTML;
    events.innerHTML = "";
    const datafilter = towns.filter(x => x.name == city);

    datafilter.forEach(town => {
        let eventList = document.createElement("ul");
        
        town.events.forEach(event => {
            let lineEvent = document.createElement("li");
            lineEvent.innerHTML = event;
            eventList.appendChild(lineEvent);
        });

        events.appendChild(eventList);
    });
  });


