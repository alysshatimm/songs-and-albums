import {
    displayHomeView
} from "./displayHomeView.js";

const deleteAlbum = function (albums) {
    
    fetch(`localhost:8080/api/albums/${album.id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .catch(err => console.error(err))
    .then(albumDiv.style.display = "none")
    .then(location.reload());
}


