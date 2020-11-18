import { AlbumRatings } from "./albumRatings.js";
import { SongRatings } from "./songRatings.js";
import { displayHomeView } from "./displayHomeView.js";
import { allAlbums } from "./sampleAllAlbumsJson.js";
import { displaySingleAlbum } from "./displaySingleAlbum.js";

const albumRatings = new AlbumRatings();
const songRatings = new SongRatings();
document.getElementById("body").appendChild(displayHomeView(allAlbums));








// var modal = document.getElementById("album-modal");
// var button1 = document.getElementById("album-button");
// var span = document.getElementById("close");

// button1.onclick = function() {
//     modal.style.display = "block";
// };

// span.onclick = function() {
//     modal.style.display = "none";
// };

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// };

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

// var modalSong = document.getElementById("song-modal");
// var buttonSong = document.getElementById("song-button");
// var spanSong = document.getElementsByClassName("song-close")[0];

// buttonSong.onclick = function() {
//     modalSong.style.display = "block";
// };

// spanSong.onclick = function() {
//     modalSong.style.display = "none";
// };

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modalSong.style.display = "none";
//     }
// };

// UPDATE ALBUM RATINGS

// const albumRating1 = document.getElementById("album-star-1");
// const albumRating2 = document.getElementById("album-star-2");
// const albumRating3 = document.getElementById("album-star-3");
// const albumRating4 = document.getElementById("album-star-4");
// const albumRating5 = document.getElementById("album-star-5");

// albumRating1.addEventListener("click", () => {
//     albumRatings.oneStarRating();
//     updateAlbumRating();
// });

// albumRating2.addEventListener("click", () => {
//     albumRatings.twoStarRating();
//     updateAlbumRating();
// });

// albumRating3.addEventListener("click", () => {
//     albumRatings.threeStarRating();
//     updateAlbumRating();
// });

// albumRating4.addEventListener("click", () => {
//     albumRatings.fourStarRating();
//     updateAlbumRating();
// });

// albumRating5.addEventListener("click", () => {
//     albumRatings.fiveStarRating();
//     updateAlbumRating();
// });

// let albumRatingText = document.getElementById("album-average-rating");
// const updateAlbumRating = function() {
//     albumRatingText.innerText = `Average Rating:  ${albumRatings.averageAlbumRating()}`;
// };
// updateAlbumRating();

// // UPDATING SONG RATINGS

// const songRating1 = document.getElementById("song-star-1");
// const songRating2 = document.getElementById("song-star-2");
// const songRating3 = document.getElementById("song-star-3");
// const songRating4 = document.getElementById("song-star-4");
// const songRating5 = document.getElementById("song-star-5");

// songRating1.addEventListener("click", () => {
//     songRatings.oneStarRating();
//     updateSongRating();
// });

// songRating2.addEventListener("click", () => {
//     songRatings.twoStarRating();
//     updateSongRating();
// });

// songRating3.addEventListener("click", () => {
//     songRatings.threeStarRating();
//     updateSongRating();
// });

// songRating4.addEventListener("click", () => {
//     songRatings.fourStarRating();
//     updateSongRating();
// });

// songRating5.addEventListener("click", () => {
//     songRatings.fiveStarRating();
//     updateSongRating();
// });

// let songRatingText = document.getElementById("song-average-stars");
// const updateSongRating = function() {
//     songRatingText.innerText = `Average Rating: ${songRatings.averageSongRating()}`;
// };
// updateSongRating();