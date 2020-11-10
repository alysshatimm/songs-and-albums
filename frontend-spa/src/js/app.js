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