const displayAlbumView = function(album) {
    album.forEach(album => {
    let outerAlbumDiv = document.createElement('div')
    outerAlbumDiv.classList.add("dropdown-content")
    outerAlbumDiv.id = ("modals" + album.id)
    let albumDiv = document.createElement('div')
    albumDiv.classList.add("modal")
    albumDiv.id = ("album-modal" + album.id)
    let innerAlbumDiv = document.createElement('div')
    innerAlbumDiv.classList.add("modal-content")
    let albumSpan = document.createElement('span')
    albumSpan.classList.add("close")
    albumSpan.id = ('close' + album.id)
    albumSpan.innerText = ("&times;")
    let albumTitle = document.createElement('h2')
    albumTitle.classList.add("album-name-modal modal-title")
    albumTitle.id = ("album-name-modal-title")
    albumTitle.innerText = album.albumTitle;
    let albumModalBlock = document.createElement('div')
    albumModalBlock.classList.add('modal-block')
    let songBlock = document.createElement('div')
    songBlock.classList.add("song-block")
    let songList = document.createElement('ol')
    songList.classList.add('songs-name-list')

    album.songs.forEach(songs => {
    let songListNames = document.createElement('li')
    songListNames.classList.add('song-name')
    songListNames.id = ("song-button")
    songListNames.innerText = songs.songTitle;
    let songDuration = document.createElement('ol')
    songDuration.classList.add('song-duration-list')
    let songDurationTimes = document.createElement('p')
    songDurationTimes.classList.add("duration")
    songDurationTimes.innerText = songs.duration
});

    let albumDeleteButton = document.createElement('button')
    albumDeleteButton.classList.add('delete-album')
    albumDeleteButton.type = ("submit")
    let commentBlock = document.createElement('div')
    commentBlock.classList.add('comment-block')
    let averageStars = document.createElement('p')
    averageStars.classList.add('average-stars')
    averageStars.id = ("album-average-rating")

    let songForm = document.createElement('form')
    songForm.classList.add('stars add-stars')
    let albumStarFiveInput = document.createElement('input')
    albumStarFiveInput.id = ("album-star-5")
    albumStarFiveInput.value = ("★★★★★")
    albumStarFiveInput.type = ("radio")
    albumStarFiveInput.name = ("rating")
    let albumStarFiveLabel = document.createElement('label')
    albumStarFiveLabel.for = ("album-star-5")
    let albumStarFourInput = document.createElement('input')
    albumStarFourInput.id = ("album-star-4")
    albumStarFourInput.value = ("★★★★")
    albumStarFourInput.type = ("radio")
    albumStarFourInput.name = ("rating")
    let albumStarFourLabel = document.createElement('label')
    albumStarFourLabel.for = ("album-star-4")
    let albumStarThreeInput = document.createElement('input')
    albumStarThreeInput.id = ("album-star-3")
    albumStarThreeInput.value = ("★★★")
    albumStarThreeInput.type = ("radio")
    albumStarThreeInput.name = ("rating")
    let albumStarThreeLabel = document.createElement('label')
    albumStarThreeLabel.for = ("album-star-3")
    let albumStarTwoInput = document.createElement('input')
    albumStarTwoInput.id = ("album-star-2")
    albumStarTwoInput.value = ("★★")
    albumStarTwoInput.type = ("radio")
    albumStarTwoInput.name = ("rating")
    let albumStarTwoLabel = document.createElement('label')
    albumStarTwoLabel.for = ("album-star-2")
    let albumStarOneInput = document.createElement('input')
    albumStarOneInput.id = ("album-star-1")
    albumStarOneInput.value = ("★")
    albumStarOneInput.type = ("radio")
    albumStarOneInput.name = ("rating")
    let albumStarOneLabel = document.createElement('label')
    albumStarOneLabel.for = ("album-star-1")
    
    let commentForm = document.createElement('form')
    commentForm.classList.add('add-comments')
    let albumAuthorInput = document.createElement('label')
    albumAuthorInput.for = ("author-input")
    let albumHeadlineInput = document.createElement('label')
    albumHeadlineInput.for = ("headline-input")
    let albumCommentsInput = document.createElement('label')
    albumCommentsInput.for = ("comments-input")
    let albumAuthorTextInput = document.createElement('input')
    albumAuthorTextInput.placeholder = ("Your Name")
    albumAuthorTextInput.type = ("text")
    albumAuthorTextInput.name = ("authorTex + album.idt")
    albumAuthorTextInput.id = ("album-author-input")
    album-author-input.classList.add("modal-input")
    let albumHeadlineTextInput = document.createElement('input')
    albumHeadlineTextInput.placeholder = ("Headline")
    albumHeadlineTextInput.type = ("text")
    albumHeadlineTextInput.name = ("headlineText")
    albumHeadlineTextInput.id = ("album-headline-input")
    album-author-input.classList.add("modal-input")
    let albumCommentTextInput = document.createElement('input')
    albumCommentTextInput.placeholder = ("Add New Comment")
    albumCommentTextInput.type = ("text")
    albumCommentTextInput.name = ("commentText")
    albumCommentTextInput.id = ("album-comment-input")
    album-author-input.classList.add("modal-input")
    let albumSubmitCommentButton = document.createElement('button')
    albumSubmitCommentButton.classList.add("submit-comment")
    albumSubmitCommentButton.type = ("submit")
    albumSubmitCommentButton.innerText = ("Submit")
    let albumCommentDiv = document.createElement('div')
    albumCommentDiv.classList.add('comments')
    let albumCommentOutterP = document.createElement('p')
    albumCommentOutterP.classList.add('comment')
    let albumCommentAuthorP = document.createElement('p')
    albumCommentAuthorP.classList.add('author')
    albumCommentAuthorP.innerText = ("Abigail")
    let albumCommentHeadlineP = document.createElement('p')
    albumCommentHeadlineP.classList.add("headline")
    albumCommentHeadlineP.innerText = ("#Foreigners")
    let albumCommentCommentP = document.createElement('p')
    albumCommentCommentP.classList.add('comment')
    albumCommentCommentP.innerText = ("I will build a great wall--and nobody builds walls better than me, believe me--and I'll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words.")


    var modal = document.getElementById("album-modal" + album.id);
    var button1 = document.getElementById("album-button"  + album.id);
    var span = document.getElementsById("close" + album.id)[0];

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
    return 
});
}
export { 
    displayAlbumView 
}