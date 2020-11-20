import {
    displayHomeView
} from "./displayHomeView.js";

const deleteSong = function(songs) {
    const songDiv = document.getElementById(`song-modal${songs.id}`)
    
    fetch(`http://localhost:8080/api/songs/${songs.id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .catch(err => console.error(err))
    .then(songDiv.style.display = "none")
    .then(location.reload())
}

export { deleteSong }