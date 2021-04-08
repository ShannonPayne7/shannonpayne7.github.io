const request =
  "https://shannonpayne7.github.io/chamberOfCommerce/directory.json";

fetch(request)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const localBusiness = jsonObject["localBusiness"];
    for (let i = 0; i < localBusiness.length; i++) {
      let card = document.createElement("section");
      let image = document.createElement("img");
      let h2 = document.createElement("h2");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let a = document.createElement("a");

      image.setAttribute("src", localBusiness[i].logo);
      image.setAttribute("alt", localBusiness[i].name + " logo");
      image.setAttribute("loading", "lazy");
      h2.textContent = localBusiness[i].name;
      p1.textContent = localBusiness[i].phone;
      p2.textContent = localBusiness[i].address;
      a.textContent = localBusiness[i].website;
      a.setAttribute("href", localBusiness[i].website);
      a.setAttribute("target", "_blank");
      p3.appendChild(a);

      card.appendChild(image);
      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);

      document.getElementById("directoryCards").appendChild(card);
    }
  });
