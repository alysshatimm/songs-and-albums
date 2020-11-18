        let songDeleteButton = document.createElement("button");
        songDeleteButton.classList.add("delete");
        songDeleteButton.type = "submit";
        songDeleteButton.innerText = ("Delete Song")
        songBlock.appendChild(songDeleteButton);

        let songCommentBlock = document.createElement("div");
        songCommentBlock.classList.add("comment-block");
        songModalBlock.appendChild(songCommentBlock)
        let averageStars = document.createElement("p");
        averageStars.classList.add("average-stars");
        averageStars.id = "song-average-rating";
        commentBlock.appendChild(averageStars);

        let songRatingForm = document.createElement("form");
        songRatingForm.classList.add("stars");
        songRatingForm.classList.add("add-stars")
        commentBlock.appendChild(songRatingForm);

        let songStarFiveInput = document.createElement("input");
        songStarFiveInput.id = `${song.id}song-star-5`;
        songStarFiveInput.value = "★★★★★";
        songStarFiveInput.type = "radio";
        songStarFiveInput.name = "rating";
        songRatingForm.appendChild(songStarFiveInput);
        let songStarFiveLabel = document.createElement("label");
        songStarFiveLabel.for = "song-star-5";
        songRatingForm.appendChild(songStarFiveLabel);
        let songStarFourInput = document.createElement("input");
        songStarFourInput.id = `${song.id}song-star-4`;
        songStarFourInput.value = "★★★★";
        songStarFourInput.type = "radio";
        songStarFourInput.name = "rating";
        songRatingForm.appendChild(songStarFourInput);
        let songStarFourLabel = document.createElement("label");
        songStarFourLabel.for = "song-star-4";
        songRatingForm.appendChild(songStarFourLabel);
        let songStarThreeInput = document.createElement("input");
        songStarThreeInput.id = `${song.id}song-star-3`;
        songStarThreeInput.value = "★★★";
        songStarThreeInput.type = "radio";
        songStarThreeInput.name = "rating";
        songRatingForm.appendChild(songStarThreeInput);
        let songStarThreeLabel = document.createElement("label");
        songStarThreeLabel.for = "song-star-3";
        songRatingForm.appendChild(songStarThreeLabel);
        let songStarTwoInput = document.createElement("input");
        songStarTwoInput.id = `${song.id}song-star-2`;
        songStarTwoInput.value = "★★";
        songStarTwoInput.type = "radio";
        songStarTwoInput.name = "rating";
        songRatingForm.appendChild(songStarTwoInput);
        let songStarTwoLabel = document.createElement("label");
        songStarTwoLabel.for = "song-star-2";
        songRatingForm.appendChild(songStarTwoLabel);
        let songStarOneInput = document.createElement("input");
        songStarOneInput.id = `${song.id}song-star-1`;
        songStarOneInput.value = "★";
        songStarOneInput.type = "radio";
        songStarOneInput.name = "rating";
        songRatingForm.appendChild(songStarOneInput);
        let songStarOneLabel = document.createElement("label");
        songStarOneLabel.for = "song-star-1";
        songRatingForm.appendChild(songStarOneLabel);

        let commentForm = document.createElement("form");
        commentForm.classList.add("add-comments");
        commentBlock.appendChild(commentForm);
        let songAuthorInput = document.createElement("label");
        songAuthorInput.for = "author-input";
        commentForm.appendChild(songAuthorInput);
        let songHeadlineInput = document.createElement("label");
        songHeadlineInput.for = "headline-input";
        commentForm.appendChild(songHeadlineInput);
        let songCommentsInput = document.createElement("label");
        songCommentsInput.for = "comments-input";
        commentForm.appendChild(songCommentsInput);
        let songAuthorTextInput = document.createElement("input");
        songAuthorTextInput.placeholder = "Your Name";
        songAuthorTextInput.type = "text";
        songAuthorTextInput.name = "authorText";
        songAuthorTextInput.id = `${song.id}song-author-input`;
        commentForm.appendChild(songAuthorTextInput);
        songAuthorInput.classList.add("modal-input");
        let songHeadlineTextInput = document.createElement("input");
        songHeadlineTextInput.placeholder = "Headline";
        songHeadlineTextInput.type = "text";
        songHeadlineTextInput.name = "headlineText";
        songHeadlineTextInput.id = `${song.id}song-headline-input`;
        commentForm.appendChild(songHeadlineTextInput);
        let songCommentTextInput = document.createElement("input");
        songCommentTextInput.placeholder = "Add New Comment";
        songCommentTextInput.type = "text";
        songCommentTextInput.name = "commentText";
        songCommentTextInput.id = `${song.id}song-comment-input`;
        commentForm.appendChild(songCommentTextInput);
        let songSubmitCommentButton = document.createElement("button");
        songSubmitCommentButton.classList.add("submit-comment");
        songSubmitCommentButton.type = "submit";
        songSubmitCommentButton.innerText = "Submit";
        commentForm.appendChild(songSubmitCommentButton);
        let songCommentDiv = dsong-average-starsocument.createElement("div");
        songCommentDiv.classList.add("comments");
        commentForm.appendChild(songCommentDiv);
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


// UPDATE ALBUM RATINGS

const albumRating1 = document.getElementById(`${album.id}album-star-1`);
const albumRating2 = document.getElementById(`${album.id}album-star-2`);
const albumRating3 = document.getElementById(`${album.id}album-star-3`);
const albumRating4 = document.getElementById(`${album.id}album-star-4`);
const albumRating5 = document.getElementById(`${album.id}album-star-5`);

albumRating1.addEventListener("click", () => {
    albumRatings.oneStarRating();
    updateAlbumRating();
});

albumRating2.addEventListener("click", () => {
    albumRatings.twoStarRating();
    updateAlbumRating();
});

albumRating3.addEventListener("click", () => {
    albumRatings.threeStarRating();
    updateAlbumRating();
});

albumRating4.addEventListener("click", () => {
    albumRatings.fourStarRating();
    updateAlbumRating();
});

albumRating5.addEventListener("click", () => {
    albumRatings.fiveStarRating();
    updateAlbumRating();
});

let albumRatingText = document.getElementById(`${album.id}album-average-rating`);
const updateAlbumRating = function() {
    albumRatingText.innerText = `Average Rating:  ${albumRatings.averageAlbumRating()}`;
};
updateAlbumRating();

// UPDATING SONG RATINGS

const songRating1 = document.getElementById(`${song.id}song-star-1`);
const songRating2 = document.getElementById(`${song.id}song-star-2`);
const songRating3 = document.getElementById(`${song.id}song-star-3`);
const songRating4 = document.getElementById(`${song.id}song-star-4`);
const songRating5 = document.getElementById(`${song.id}song-star-5`);

songRating1.addEventListener("click", () => {
    songRatings.oneStarRating();
    updateSongRating();
});

songRating2.addEventListener("click", () => {
    songRatings.twoStarRating();
    updateSongRating();
});

songRating3.addEventListener("click", () => {
    songRatings.threeStarRating();
    updateSongRating();
});

songRating4.addEventListener("click", () => {
    songRatings.fourStarRating();
    updateSongRating();
});

songRating5.addEventListener("click", () => {
    songRatings.fiveStarRating();
    updateSongRating();
});

let songRatingText = document.getElementById(`${song.id}song-average-stars`);
const updateSongRating = function() {
    songRatingText.innerText = `Average Rating: ${songRatings.averageSongRating()}`;
};
updateSongRating();