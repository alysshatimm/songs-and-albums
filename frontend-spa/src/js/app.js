var modal = document.getElementById("album-modal");
var button1 = document.getElementById("album-button");
var span = document.getElementsByClassName("close")[0];

button1.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modalAdd = document.getElementById("album-modal-add");
var buttonAdd = document.getElementById("add-album-button");
var spanAdd = document.getElementsByClassName("close-add")[0];

buttonAdd.onclick = function() {
    modalAdd.style.display = "block";
}

spanAdd.onclick = function() {
    modalAdd.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modalAdd.style.display = "none";
    }
}

var modalSong = document.getElementById("song-modal");
var buttonSong = document.getElementById("song-button");
var spanSong = document.getElementsByClassName("song-close")[0];

buttonSong.onclick = function() {
    modalSong.style.display = "block";
}

spanSong.onclick = function() {
    modalSong.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modalSong.style.display = "none";
    }
}