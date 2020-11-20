import {
    displayHomeView
} from "./displayHomeView.js";

const deleteAlbum = function(album) {
    const albumDiv = document.getElementById(`album-modal${album.id}`)
    
    fetch(`http://localhost:8080/api/albums/${album.id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .catch(err => console.error(err))
    .then(albumDiv.style.display = "none")
    .then(location.reload());
}

export { deleteAlbum }