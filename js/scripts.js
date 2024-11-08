import { films } from "./films.js";
const btnDisplay = document.querySelector("#displaychange");
const pageBody = document.querySelector("body");
const parentClass = document.querySelector(".parent");
let grid = true;
let movieLength = films.length;

btnDisplay.addEventListener("click", () => {
    if (grid == true){
        btnDisplay.setAttribute("src", "Images/grid.svg")
        pageBody.className = "list";
        grid = false
    }
    else {
        btnDisplay.setAttribute("src", "Images/list.svg")
        pageBody.className = "grid";
        grid = true
    }
});

for (let x = 0; x < movieLength; x++) {
  let card = document.createElement("section");

  let cardText = document.createElement("div")

  let moviePosterSrc =
    "https://starwars-visualguide.com/assets/img/films/" +
    films[x].episode_id +
    ".jpg";
  let moviePoster = document.createElement("img");
  moviePoster.setAttribute("src", moviePosterSrc);
  card.appendChild(moviePoster);

  let movieTitle = document.createElement("p");
  movieTitle.innerHTML = films[x].title;
  cardText.appendChild(movieTitle);

  let movieDirector = document.createElement("p");
  movieDirector.innerHTML = films[x].director;
  cardText.appendChild(movieDirector);

  let movieRelease = document.createElement("p");
  movieRelease.innerHTML = films[x].release_date;
  cardText.appendChild(movieRelease);

  card.appendChild(cardText);


  parentClass.appendChild(card);
  

}
