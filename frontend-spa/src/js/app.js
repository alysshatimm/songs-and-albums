import { AlbumRatings } from "./albumRatings.js";
import { SongRatings } from "./songRatings.js";
import { displayHomeView } from "./displayHomeView.js";
import { displaySingleAlbum } from "./displaySingleAlbum.js";

const albumRatings = new AlbumRatings();
const songRatings = new SongRatings();

var modalAdd = document.getElementById("album-modal-add");
var buttonAdd = document.getElementById("add-album-button");
var spanAdd = document.getElementsByClassName("close-add")[0];

buttonAdd.onclick = function () {
  modalAdd.style.display = "block";
};

spanAdd.onclick = function () {
  modalAdd.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalAdd) {
    modalAdd.style.display = "none";
  }
};


fetch("http://localhost:8080/api/albums", {
  method: "GET",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((albums) => displayHomeView(albums))
  .then((mainElement) => mainElement.appendChild(displayHomeView))
  .catch((error) => console.log(error));
