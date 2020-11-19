import { AlbumRatings } from "./albumRatings.js";
import { SongRatings } from "./songRatings.js";
import { displayHomeView } from "./displayHomeView.js";

const albumRatings = new AlbumRatings();
const songRatings = new SongRatings();

var modalAdd = document.getElementById("album-modal-add");
var buttonAdd = document.getElementById("add-album-button");
var spanAdd = document.getElementsByClassName("close-add")[0];

buttonAdd.onclick = function() {
    modalAdd.style.display = "block";
};

spanAdd.onclick = function() {
    modalAdd.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modalAdd) {
        modalAdd.style.display = "none";
    }
};

const mainElement = document.getElementById("container");
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





const submitAlbum = document.getElementById("add-album-submit")
const artistSubmit = document.getElementById("new-artist-input")
const albumTitleSubmit = document.getElementById("new-album-input")
const recordLabelSubmit = document.getElementById("new-record-label-input")
const albumArtSubmit = document.getElementById("album-image-input")
const closeAlbumAddModal = document.getElementById("album-modal-add")

submitAlbum.addEventListener('click', () => {

    const albumJson = {
        "artist": artistSubmit.value,
        "albumTitle": albumTitleSubmit.value,
        "recordLabel": recordLabelSubmit.value,
        "albumArt": albumArtSubmit.value,
        "songs": []
    }
    fetch("http://localhost:8080/api/albums", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(albumJson)
        })
        .then(response => response.json())
        .catch(err => console.error(err))
        .then(albums => displayHomeView(albums))
        .then(closeAlbumAddModal.style.display = "none")
        .then(location.reload());


})