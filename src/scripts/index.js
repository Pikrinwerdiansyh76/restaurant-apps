import "regenerator-runtime";
import "../styles/main.css";
import "../styles/responsive.css";

import restoData from "../public/data/DATA.json";

document.addEventListener("DOMContentLoaded", () => {
  const restaurantItem = restoData["restaurants"];
  let restaurantList = "";
  restaurantItem.forEach(function (data) {
    restaurantList += `
    <div class="card" tabindex="0">
      <div class="label__place" tabindex="0"> ${data["city"]} </div>
      <div class="gambarcontent">
        <img src="${data["pictureId"]}" alt="${data["name"]}" title="${
      data["name"]
    }" />
      </div>
      <div class="content"> 
        <h3>Rating
            <a href="#" tabindex="0"> ${data["rating"]}</a>
            </h3>
        <h2 tabindex="0">${data["name"]}</h2>
        <p tabindex="0">${data["description"].slice(0, 150)}...<p>
      </div>
    </div>
    `;
  });

  document.querySelector(".card__list").innerHTML = restaurantList;

  const menu = document.querySelector("#menu");
  const drawer = document.querySelector("#drawer");
  const hero = document.querySelector(".hero");
  const main = document.querySelector("main");

  menu.addEventListener("click", function (event) {
    drawer.classList.toggle("open");
    event.stopPropagation();
  });

  hero.addEventListener("click", function () {
    drawer.classList.remove("open");
  });

  main.addEventListener("click", function () {
    drawer.classList.remove("open");
  });
});

console.log("coders hehe");
