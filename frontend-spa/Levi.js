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
        songAuthorTextInput.id = `${song.id}song-author-input`;
        songCommentForm.appendChild(songAuthorTextInput);
        songAuthorInput.classList.add("modal-input");
        let songHeadlineTextInput = document.createElement("input");
        songHeadlineTextInput.placeholder = "Headline";
        songHeadlineTextInput.type = "text";
        songHeadlineTextInput.name = "headlineText";
        songHeadlineTextInput.id = `${song.id}song-headline-input`;
        songCommentForm.appendChild(songHeadlineTextInput);
        let songCommentTextInput = document.createElement("input");
        songCommentTextInput.placeholder = "Add New Comment";
        songCommentTextInput.type = "text";
        songCommentTextInput.name = "commentText";
        songCommentTextInput.id = `${song.id}song-comment-input`;
        songCommentForm.appendChild(songCommentTextInput);
        let songSubmitCommentButton = document.createElement("button");
        songSubmitCommentButton.classList.add("submit-comment");
        songSubmitCommentButton.type = "submit";
        songSubmitCommentButton.innerText = "Submit";
        songCommentForm.appendChild(songSubmitCommentButton);
        let songCommentDiv = dsong - average - starsocument.createElement("div");
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