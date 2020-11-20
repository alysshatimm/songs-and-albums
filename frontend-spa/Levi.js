       
let songCommentDiv = document.createElement("div");
songCommentDiv.classList.add("comments");
songCommentForm.appendChild(songCommentDiv);
let songCommentOutterP = document.createElement("p");
songCommentOutterP.classList.add("comment");
songCommentDiv.appendChild(songCommentOutterP);
let songCommentAuthorP = document.createElement("p");
songCommentAuthorP.classList.add("author");
songCommentAuthorP.innerText = `${songComment.author}`;
songCommentOutterP.appendChild(songCommentAuthorP);
let songCommentHeadlineP = document.createElement("p");
songCommentHeadlineP.classList.add("headline");
songCommentHeadlineP.innerText = `${songComment.headline}`;
songCommentOutterP.appendChild(songCommentHeadlineP);
let songCommentCommentP = document.createElement("p");
songCommentCommentP.classList.add("comment");
songCommentCommentP.innerText = `${songComment.comment}`
songCommentOutterP.appendChild(songCommentCommentP);


const submitAlbum = document.getElementById("add-album-button")
const artistSubmit = document.getElementById("new-artist-input")
const albumTitleSubmit = document.getElementById("new-album-input")
const recordLabelSubmit = document.getElementById("new-record-label-input")
const albumArtSubmit = document.getElementById("album-image-input")
submitAlbum.addEventListener('click', (clickEvent) => {
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
        .then(albums => displayHomeView(albums))
        .catch(err => console.error(err));
})

      