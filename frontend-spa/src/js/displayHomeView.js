import { displaySingleAlbum } from "./displaySingleAlbum.js";
import { allAlbums } from "./sampleAllAlbumsJson.js";


const displayHomeView = function(albums) {
    const mainElement = document.getElementById("container");

    albums.forEach((album) => {
        let albumButton = document.createElement("button");
        albumButton.classList.add("dropbtn");
        albumButton.id = (`album-button${album.id}`)
        let albumImage = document.createElement("img");
        albumImage.classList.add("album-art");
        albumImage.src = album.albumArt;
        let albumArtist = document.createElement("h2");
        albumArtist.classList.add("artist");
        albumArtist.innerText = album.artist;
        let albumName = document.createElement("h3");
        albumName.classList.add("album-name");
        albumName.innerText = album.albumTitle;
        let recordLabel = document.createElement("h4");
        recordLabel.classList.add("record-label");
        recordLabel.innerText = album.recordLabel;
        albumButton.appendChild(albumImage);
        albumButton.appendChild(albumArtist);
        albumButton.appendChild(albumName);
        albumButton.appendChild(recordLabel);
        mainElement.appendChild(albumButton);




        let outerAlbumDiv = document.createElement("div");
        outerAlbumDiv.classList.add("dropdown-content");
        outerAlbumDiv.id = (`modals${album.id}`);
        mainElement.appendChild(outerAlbumDiv);
        let albumDiv = document.createElement("div");
        albumDiv.classList.add("modal");
        albumDiv.id = (`album-modal${album.id}`)
        outerAlbumDiv.appendChild(albumDiv);
        let innerAlbumDiv = document.createElement("div");
        innerAlbumDiv.classList.add("modal-content");
        albumDiv.appendChild(innerAlbumDiv);
        let albumSpan = document.createElement("span");
        albumSpan.classList.add("close");
        albumSpan.id = (`close${album.id}`);
        albumSpan.innerText = "&times;";
        innerAlbumDiv.appendChild(albumSpan)
        let albumTitle = document.createElement("h2");
        albumTitle.classList.add("album-name-modal");
        albumTitle.classList.add("modal-title")
        albumTitle.id = "album-name-modal-title";
        albumTitle.innerText = album.albumTitle;
        innerAlbumDiv.appendChild(albumTitle);
        let albumModalBlock = document.createElement("div");
        albumModalBlock.classList.add("modal-block");
        innerAlbumDiv.appendChild(albumModalBlock);
        let songBlock = document.createElement("div");
        songBlock.classList.add("song-block");
        albumModalBlock.appendChild(songBlock);
        let songList = document.createElement("ol");
        songList.classList.add("songs-name-list");
        songBlock.appendChild(songList);
        let songDuration = document.createElement("ol");
        songDuration.classList.add("song-duration-list");
        songBlock.appendChild(songDuration);

        album.songs.forEach((songs) => {
            let songName = document.createElement("li");
            songName.classList.add("song-name");
            songName.id = "song-button";
            songName.innerText = songs.songTitle;
            songList.appendChild(songName);

            let songDurationTimes = document.createElement("p");
            songDurationTimes.classList.add("duration");
            songDurationTimes.innerText = songs.duration;
            songDuration.appendChild(songDurationTimes);
        });


        let albumDeleteButton = document.createElement("button");
        albumDeleteButton.classList.add("delete-album");
        albumDeleteButton.type = "submit";
        albumDeleteButton.innerText = ("Delete Album")
        songBlock.appendChild(albumDeleteButton);
        let commentBlock = document.createElement("div");
        commentBlock.classList.add("comment-block");
        albumModalBlock.appendChild(commentBlock)
        let averageStars = document.createElement("p");
        averageStars.classList.add("average-stars");
        averageStars.id = "album-average-rating";
        commentBlock.appendChild(averageStars);
        let albumRatingForm = document.createElement("form");
        albumRatingForm.classList.add("stars");
        albumRatingForm.classList.add("add-stars")
        commentBlock.appendChild(albumRatingForm);
        let albumStarFiveInput = document.createElement("input");
        albumStarFiveInput.id = "album-star-5";
        albumStarFiveInput.value = "★★★★★";
        albumStarFiveInput.type = "radio";
        albumStarFiveInput.name = "rating";
        albumRatingForm.appendChild(albumStarFiveInput);
        let albumStarFiveLabel = document.createElement("label");
        albumStarFiveLabel.for = "album-star-5";
        albumRatingForm.appendChild(albumStarFiveLabel);
        let albumStarFourInput = document.createElement("input");
        albumStarFourInput.id = "album-star-4";
        albumStarFourInput.value = "★★★★";
        albumStarFourInput.type = "radio";
        albumStarFourInput.name = "rating";
        albumRatingForm.appendChild(albumStarFourInput);
        let albumStarFourLabel = document.createElement("label");
        albumStarFourLabel.for = "album-star-4";
        albumRatingForm.appendChild(albumStarFourLabel);
        let albumStarThreeInput = document.createElement("input");
        albumStarThreeInput.id = "album-star-3";
        albumStarThreeInput.value = "★★★";
        albumStarThreeInput.type = "radio";
        albumStarThreeInput.name = "rating";
        albumRatingForm.appendChild(albumStarThreeInput);
        let albumStarThreeLabel = document.createElement("label");
        albumStarThreeLabel.for = "album-star-3";
        albumRatingForm.appendChild(albumStarThreeLabel);
        let albumStarTwoInput = document.createElement("input");
        albumStarTwoInput.id = "album-star-2";
        albumStarTwoInput.value = "★★";
        albumStarTwoInput.type = "radio";
        albumStarTwoInput.name = "rating";
        albumRatingForm.appendChild(albumStarTwoInput);
        let albumStarTwoLabel = document.createElement("label");
        albumStarTwoLabel.for = "album-star-2";
        albumRatingForm.appendChild(albumStarTwoLabel);
        let albumStarOneInput = document.createElement("input");
        albumStarOneInput.id = "album-star-1";
        albumStarOneInput.value = "★";
        albumStarOneInput.type = "radio";
        albumStarOneInput.name = "rating";
        albumRatingForm.appendChild(albumStarOneInput);
        let albumStarOneLabel = document.createElement("label");
        albumStarOneLabel.for = "album-star-1";
        albumRatingForm.appendChild(albumStarOneLabel);

        let commentForm = document.createElement("form");
        commentForm.classList.add("add-comments");
        commentBlock.appendChild(commentForm);
        let albumAuthorInput = document.createElement("label");
        albumAuthorInput.for = "author-input";
        commentForm.appendChild(albumAuthorInput);
        let albumHeadlineInput = document.createElement("label");
        albumHeadlineInput.for = "headline-input";
        commentForm.appendChild(albumHeadlineInput);
        let albumCommentsInput = document.createElement("label");
        albumCommentsInput.for = "comments-input";
        commentForm.appendChild(albumCommentsInput);
        let albumAuthorTextInput = document.createElement("input");
        albumAuthorTextInput.placeholder = "Your Name";
        albumAuthorTextInput.type = "text";
        albumAuthorTextInput.name = "authorTex + album.idt";
        albumAuthorTextInput.id = "album-author-input";
        commentForm.appendChild(albumAuthorTextInput);
        albumAuthorInput.classList.add("modal-input");
        let albumHeadlineTextInput = document.createElement("input");
        albumHeadlineTextInput.placeholder = "Headline";
        albumHeadlineTextInput.type = "text";
        albumHeadlineTextInput.name = "headlineText";
        albumHeadlineTextInput.id = "album-headline-input";
        commentForm.appendChild(albumHeadlineTextInput);
        let albumCommentTextInput = document.createElement("input");
        albumCommentTextInput.placeholder = "Add New Comment";
        albumCommentTextInput.type = "text";
        albumCommentTextInput.name = "commentText";
        albumCommentTextInput.id = "album-comment-input";
        commentForm.appendChild(albumCommentTextInput);
        let albumSubmitCommentButton = document.createElement("button");
        albumSubmitCommentButton.classList.add("submit-comment");
        albumSubmitCommentButton.type = "submit";
        albumSubmitCommentButton.innerText = "Submit";
        commentForm.appendChild(albumSubmitCommentButton);
        let albumCommentDiv = document.createElement("div");
        albumCommentDiv.classList.add("comments");
        commentForm.appendChild(albumCommentDiv);
        let albumCommentOutterP = document.createElement("p");
        albumCommentOutterP.classList.add("comment");
        albumCommentDiv.appendChild(albumCommentOutterP);
        let albumCommentAuthorP = document.createElement("p");
        albumCommentAuthorP.classList.add("author");
        albumCommentAuthorP.innerText = "Abigail";
        albumCommentOutterP.appendChild(albumCommentAuthorP);
        let albumCommentHeadlineP = document.createElement("p");
        albumCommentHeadlineP.classList.add("headline");
        albumCommentHeadlineP.innerText = "#Foreigners";
        albumCommentOutterP.appendChild(albumCommentHeadlineP);
        let albumCommentCommentP = document.createElement("p");
        albumCommentCommentP.classList.add("comment");
        albumCommentCommentP.innerText =
            "I will build a great wall--and nobody builds walls better than me, believe me--and I'll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words.";
        albumCommentOutterP.appendChild(albumCommentCommentP);






        var modal = document.getElementById(`album-modal${album.id}`);
        var button = document.getElementById(`album-button${album.id}`);
        var span = document.getElementById(`close${album.id}`);

        // span.style.color = "red"
        button.onclick = function() {
            modal.style.display = "block";
        };

        span.onclick = function() {
            modal.style.display = "none";
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };

    });

    return mainElement;
};

export { displayHomeView };