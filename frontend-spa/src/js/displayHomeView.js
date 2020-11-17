import { displaySingleAlbum } from "./displaySingleAlbum.js";
import { allAlbums } from "./sampleAllAlbumsJson.js";


const displayHomeView = function (albums) {
  const mainElement = document.createElement("main");
  mainElement.classList.add("container");
  mainElement.classList.add("dropdown");
  mainElement.classList.add("template-album");
  mainElement.id = ("container")

  // let campusListHtml = "";

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
    
  });

  return mainElement;
};

export { displayHomeView };
