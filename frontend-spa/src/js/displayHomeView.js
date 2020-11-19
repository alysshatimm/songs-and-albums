import { displaySingleAlbum } from "./displaySingleAlbum.js";
// import { allAlbums } from "./sampleAllAlbumsJson.js";
import { AlbumRatings } from "./albumRatings.js";
import { SongRatings } from "./songRatings.js";


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
        albumSpan.innerText = "ⓧ";
        innerAlbumDiv.appendChild(albumSpan)
        let albumTitle = document.createElement("h2");
        albumTitle.classList.add("album-name-modal");
        albumTitle.classList.add("modal-title")
            // albumTitle.id = "album-name-modal-title";
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
            songName.id = (`song-button${songs.id}`);
            songName.innerText = songs.songTitle;
            songList.appendChild(songName);
            let songDurationTimes = document.createElement("p");
            songDurationTimes.classList.add("duration");
            songDurationTimes.innerText = songs.duration;
            songDuration.appendChild(songDurationTimes);


            let outerSongDiv = document.createElement("div");
            outerSongDiv.classList.add("dropdown-content");
            mainElement.appendChild(outerSongDiv);
            let songDiv = document.createElement("div");
            songDiv.classList.add("modal");
            songDiv.id = (`song-modal${songs.id}`)
            outerSongDiv.appendChild(songDiv);
            let innerSongDiv = document.createElement("div");
            innerSongDiv.classList.add("modal-content");
            songDiv.appendChild(innerSongDiv);
            let songSpan = document.createElement("span");
            songSpan.classList.add("close");
            songSpan.id = (`song-close${songs.id}`);
            songSpan.innerText = "ⓧ";
            innerSongDiv.appendChild(songSpan)
            let songTitle = document.createElement("h2")
            songTitle.classList.add("song-name-modal")
            songTitle.classList.add("modal-title")
            songTitle.id = ("song-name-modal-title")
            songTitle.innerText = songs.songTitle;
            innerSongDiv.appendChild(songTitle)
            let songModalBlock = document.createElement("div")
            songModalBlock.classList.add("song-modal-block")
            innerSongDiv.appendChild(songModalBlock)
            let songSongBlock = document.createElement("div")
            songSongBlock.classList.add("song-block")
            songModalBlock.appendChild(songSongBlock)
            let video = document.createElement("iframe")
            video.width = "420"
            video.height = "345"
            video.src = songs.songLink
            songSongBlock.appendChild(video)
            let songDeleteButton = document.createElement("button");
            songDeleteButton.classList.add("delete");
            songDeleteButton.type = "submit";
            songDeleteButton.innerText = ("Delete Song")
            songSongBlock.appendChild(songDeleteButton);
            let songCommentBlock = document.createElement("div");
            songCommentBlock.classList.add("comment-block");
            songModalBlock.appendChild(songCommentBlock)
            let songAverageStars = document.createElement("p");
            songAverageStars.classList.add("average-stars");
            songAverageStars.id = `song-average-stars${songs.id}`;
            songAverageStars.innerText = ""
            songModalBlock.appendChild(songAverageStars)
            songCommentBlock.appendChild(songAverageStars);
            let songRatingForm = document.createElement("form");
            songRatingForm.classList.add("stars");
            songRatingForm.classList.add("add-stars")
            songCommentBlock.appendChild(songRatingForm);

            const songRating = new SongRatings()
            let songStarFiveInput = document.createElement("input");
            songStarFiveInput.id = `song-star-5${songs.id}`;
            songStarFiveInput.value = "★★★★★";
            songStarFiveInput.type = "radio";
            songStarFiveInput.name = "rating";
            songRatingForm.appendChild(songStarFiveInput);
            let songStarFiveLabel = document.createElement("label");
            songStarFiveLabel.for = `song-star-5${songs.id}`;
            songStarFiveLabel.addEventListener("click", (clickEvent) => {
                clickEvent.preventDefault()
                songRatings.fiveStarRating();
                updateSongRating();
                clickEvent.target.style.color = "gold"
            });
            songRatingForm.appendChild(songStarFiveLabel);
            let songStarFourInput = document.createElement("input");
            songStarFourInput.id = `song-star-4${songs.id}`;
            songStarFourInput.value = "★★★★";
            songStarFourInput.type = "radio";
            songStarFourInput.name = "rating";
            songRatingForm.appendChild(songStarFourInput);
            let songStarFourLabel = document.createElement("label");
            songStarFourLabel.for = `song-star-4${songs.id}`;
            songStarFourLabel.addEventListener("click", (clickEvent) => {
                clickEvent.preventDefault()
                songRatings.fourStarRating();
                updateSongRating();
                clickEvent.target.style.color = "gold"
            });
            songRatingForm.appendChild(songStarFourLabel);

            let songStarThreeInput = document.createElement("input");
            songStarThreeInput.id = `song-star-3${songs.id}`;
            songStarThreeInput.value = "★★★";
            songStarThreeInput.type = "radio";
            songStarThreeInput.name = "rating";
            songRatingForm.appendChild(songStarThreeInput);
            let songStarThreeLabel = document.createElement("label");
            songStarThreeLabel.for = `song-star-3${songs.id}`;
            songStarThreeLabel.addEventListener("click", (clickEvent) => {
                clickEvent.preventDefault()
                songRatings.threeStarRating();
                updateSongRating();
                clickEvent.target.style.color = "gold"
            });
            songRatingForm.appendChild(songStarThreeLabel);
            let songStarTwoInput = document.createElement("input");
            songStarTwoInput.id = `song-star-2${songs.id}`;
            songStarTwoInput.value = "★★";
            songStarTwoInput.type = "radio";
            songStarTwoInput.name = "rating";
            songRatingForm.appendChild(songStarTwoInput);
            let songStarTwoLabel = document.createElement("label");
            songStarTwoLabel.for = `song-star-2${songs.id}`;
            songStarTwoLabel.addEventListener("click", (clickEvent) => {
                clickEvent.preventDefault()
                songRatings.twoStarRating();
                updateSongRating();
                clickEvent.target.style.color = "gold"
            });
            songRatingForm.appendChild(songStarTwoLabel);
            let songStarOneInput = document.createElement("input");
            songStarOneInput.id = `song-star-1${songs.id}`;
            songStarOneInput.value = "★";
            songStarOneInput.type = "radio";
            songStarOneInput.name = "rating";
            songRatingForm.appendChild(songStarOneInput);
            let songStarOneLabel = document.createElement("label");
            songStarOneLabel.for = `song-star-1${songs.id}`;
            songStarOneLabel.addEventListener("click", (clickEvent) => {
                clickEvent.preventDefault()
                songRatings.oneStarRating();
                updateSongRating();
                clickEvent.target.style.color = "gold"
            });
            songRatingForm.appendChild(songStarOneLabel);

            let songCommentForm = document.createElement("form");
            songCommentForm.classList.add("add-comments");
            songCommentBlock.appendChild(songCommentForm);
            let songAuthorInput = document.createElement("label");
            songAuthorInput.for = "author-input";
            songCommentForm.appendChild(songAuthorInput);
            let songHeadlineInput = document.createElement("label");
            songHeadlineInput.for = "headline-input";
            songCommentForm.appendChild(songHeadlineInput);
            let songCommentsInput = document.createElement("label");
            songCommentsInput.for = "comments-input";
            songCommentForm.appendChild(songCommentsInput);
            let songAuthorTextInput = document.createElement("input");
            songAuthorTextInput.placeholder = "Your Name";
            songAuthorTextInput.type = "text";
            songAuthorTextInput.name = "authorText";
            songAuthorTextInput.id = `song-author-input${songs.id}`;
            songCommentForm.appendChild(songAuthorTextInput);
            songAuthorInput.classList.add("modal-input");
            let songHeadlineTextInput = document.createElement("input");
            songHeadlineTextInput.placeholder = "Headline";
            songHeadlineTextInput.type = "text";
            songHeadlineTextInput.name = "headlineText";
            songHeadlineTextInput.id = `song-headline-input${songs.id}`;
            songCommentForm.appendChild(songHeadlineTextInput);
            let songCommentTextInput = document.createElement("input");
            songCommentTextInput.placeholder = "Add New Comment";
            songCommentTextInput.type = "text";
            songCommentTextInput.name = "commentText";
            songCommentTextInput.id = `song-comment-input${songs.id}`;
            songCommentForm.appendChild(songCommentTextInput);
            let songSubmitCommentButton = document.createElement("button");
            songSubmitCommentButton.classList.add("submit-comment");
            songSubmitCommentButton.type = "submit";
            songSubmitCommentButton.innerText = "Submit";
            songCommentForm.appendChild(songSubmitCommentButton);

            var songModal = document.getElementById(`song-modal${songs.id}`);
            var songButton = document.getElementById(`song-button${songs.id}`);
            var songCloseSpan = document.getElementById(`song-close${songs.id}`);

            songButton.onclick = function() {
                songModal.style.display = "block";
            };

            songCloseSpan.onclick = function() {
                songModal.style.display = "none";
            };

            window.onclick = function(event) {
                if (event.target == songModal) {
                    songModal.style.display = "none";
                }
            };

            let songRatingText = document.getElementById(`song-average-stars${songs.id}`);
            const updateSongRating = function() {
                songRatingText.innerText = `Average Rating: ${songRating.averageSongRating()}`;
            };
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
        averageStars.id = `album-average-rating${album.id}`;
        commentBlock.appendChild(averageStars);
        let albumRatingForm = document.createElement("form");
        albumRatingForm.classList.add("stars");
        albumRatingForm.classList.add("add-stars")
        commentBlock.appendChild(albumRatingForm);

        const albumRatings = new AlbumRatings();
        let albumStarFiveInput = document.createElement("input");
        albumStarFiveInput.id = `album-star-5${album.id}`;
        albumStarFiveInput.value = "★★★★★";
        albumStarFiveInput.type = "radio";
        albumStarFiveInput.name = "rating";
        albumRatingForm.appendChild(albumStarFiveInput);
        let albumStarFiveLabel = document.createElement("label");
        albumStarFiveLabel.for = `album-star-5${album.id}`;
        albumStarFiveLabel.addEventListener("click", (clickEvent) => {
            clickEvent.preventDefault()
            albumRatings.fiveStarRating();
            updateAlbumRating();
            clickEvent.target.style.color = "gold"
        });
        albumRatingForm.appendChild(albumStarFiveLabel);
        let albumStarFourInput = document.createElement("input");
        albumStarFourInput.id = `album-star-4${album.id}`;
        albumStarFourInput.value = "★★★★";
        albumStarFourInput.type = "radio";
        albumStarFourInput.name = "rating";
        albumRatingForm.appendChild(albumStarFourInput);
        let albumStarFourLabel = document.createElement("label");
        albumStarFourLabel.for = `album-star-4${album.id}`;
        albumStarFourLabel.addEventListener("click", (clickEvent) => {
            clickEvent.preventDefault()
            albumRatings.fourStarRating();
            updateAlbumRating();
            clickEvent.target.style.color = "gold"
        });
        albumRatingForm.appendChild(albumStarFourLabel);
        let albumStarThreeInput = document.createElement("input");
        albumStarThreeInput.id = `album-star-3${album.id}`;
        albumStarThreeInput.value = "★★★";
        albumStarThreeInput.type = "radio";
        albumStarThreeInput.name = "rating";
        albumRatingForm.appendChild(albumStarThreeInput);
        let albumStarThreeLabel = document.createElement("label");
        albumStarThreeLabel.for = `album-star-3${album.id}`;
        albumStarThreeLabel.addEventListener("click", (clickEvent) => {
            clickEvent.preventDefault()
            albumRatings.threeStarRating();
            updateAlbumRating();
            clickEvent.target.style.color = "gold"
        });
        albumRatingForm.appendChild(albumStarThreeLabel);
        let albumStarTwoInput = document.createElement("input");
        albumStarTwoInput.id = `album-star-2${album.id}`;
        albumStarTwoInput.value = "★★";
        albumStarTwoInput.type = "radio";
        albumStarTwoInput.name = "rating";
        albumRatingForm.appendChild(albumStarTwoInput);
        let albumStarTwoLabel = document.createElement("label");
        albumStarTwoLabel.for = `album-star-2${album.id}`;
        albumStarTwoLabel.addEventListener("click", (clickEvent) => {
            clickEvent.preventDefault()
            albumRatings.twoStarRating();
            updateAlbumRating();
            clickEvent.target.style.color = "gold"
        });
        albumRatingForm.appendChild(albumStarTwoLabel);
        let albumStarOneInput = document.createElement("input");
        albumStarOneInput.id = `album-star-1${album.id}`;
        albumStarOneInput.value = "★";
        albumStarOneInput.type = "radio";
        albumStarOneInput.name = "rating";
        albumRatingForm.appendChild(albumStarOneInput);
        let albumStarOneLabel = document.createElement("label");
        albumStarOneLabel.for = `album-star-1${album.id}`;
        albumStarOneLabel.addEventListener("click", (clickEvent) => {
            clickEvent.preventDefault()
            albumRatings.oneStarRating();
            updateAlbumRating();
            clickEvent.target.style.color = "gold"
        });
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
        albumAuthorTextInput.name = "authorText";
        albumAuthorTextInput.id = `album-author-input${album.id}`;
        commentForm.appendChild(albumAuthorTextInput);
        albumAuthorInput.classList.add("modal-input");
        let albumHeadlineTextInput = document.createElement("input");
        albumHeadlineTextInput.placeholder = "Headline";
        albumHeadlineTextInput.type = "text";
        albumHeadlineTextInput.name = "headlineText";
        albumHeadlineTextInput.id = `album-headline-input${album.id}`;
        commentForm.appendChild(albumHeadlineTextInput);
        let albumCommentTextInput = document.createElement("input");
        albumCommentTextInput.placeholder = "Add New Comment";
        albumCommentTextInput.type = "text";
        albumCommentTextInput.name = "commentText";
        albumCommentTextInput.id = `album-comment-input${album.id}`;
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
        albumCommentAuthorP.innerText = "Alyssha";
        albumCommentOutterP.appendChild(albumCommentAuthorP);
        let albumCommentHeadlineP = document.createElement("p");
        albumCommentHeadlineP.classList.add("headline");
        albumCommentHeadlineP.innerText = "#MakeAmericaOkayAgain";
        albumCommentOutterP.appendChild(albumCommentHeadlineP);
        let albumCommentCommentP = document.createElement("p");
        albumCommentCommentP.classList.add("comment");
        albumCommentCommentP.innerText =
            "I will build a great wall--and nobody builds walls better than me, believe me--and I'll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words.";
        albumCommentOutterP.appendChild(albumCommentCommentP);

        var modal = document.getElementById(`album-modal${album.id}`);
        var button = document.getElementById(`album-button${album.id}`);
        var span = document.getElementById(`close${album.id}`);

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

        let albumRatingText = document.getElementById(`album-average-rating${album.id}`);
        const updateAlbumRating = function() {
            albumRatingText.innerText = `Average Rating:  ${albumRatings.averageAlbumRating()}`;
        };
        updateAlbumRating();
    });

    return mainElement;
};

export { displayHomeView };