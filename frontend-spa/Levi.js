       
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

        // UPDATE ALBUM RATINGS

        // UPDATING SONG RATINGS

      