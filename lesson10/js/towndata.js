const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];

    const cards =  document.querySelector("div.cards");
    const filter = ["Preston", "Soda Springs", "Fish Haven"];
    const datafilter = towns.filter(x => filter.includes(x.name));
    
    datafilter.forEach(town => {
        let card = document.createElement("section");
        let textdiv = document.createElement("div");
        let h2 = document.createElement("h2");
        let motto = document.createElement("p"); 
        let founded = document.createElement("p");
        let population = document.createElement("p");
        let rain = document.createElement("p");
        let imagediv = document.createElement("div");
        let image = document.createElement("img");

        h2.innerHTML = town.name;
        motto.innerHTML = town.motto;
        founded.innerHTML = "Year Founded: " + town.yearFounded;
        population.innerHTML = "Population: " + town.currentPopulation;
        rain.innerHTML = "Annual Rainfall: " + town.averageRainfall + " inches";
        image.setAttribute("src", "images/" + town.photo);
        image.setAttribute('alt', `Picture of the town of ${town.name}, Idaho`);
        image.setAttribute("loading", "lazy");
        imagediv.setAttribute("class", "cardimage");
        textdiv.setAttribute("class", "cardtext")

        textdiv.appendChild(h2);
        textdiv.appendChild(motto);
        textdiv.appendChild(founded);
        textdiv.appendChild(population);
        textdiv.appendChild(rain);
        imagediv.appendChild(image);
        card.appendChild(imagediv);
        card.appendChild(textdiv);
        cards.appendChild(card);
    });
    


    /* const prophets = jsonObject["prophets"];
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let p1 =  document.createElement("p");
      let p2 =  document.createElement("p");
      let image = document.createElement("img");

      h2.textContent = prophets[i].name + " " + prophets[i].lastname;
      p1.textContent = "Birth Date: " + prophets[i].birthdate;
      p2.textContent = "Birth Place: " + prophets[i].birthplace;
      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', prophets[i].name + " " + prophets[i].lastname + "-" + (i+1));
      image.setAttribute("loading", "lazy");

      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(image);
      

      document.querySelector("div.cards").appendChild(card);
    }*/
  });
