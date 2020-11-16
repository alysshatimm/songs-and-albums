import { allAlbums } from "./sampleAllAlbumsJson.js"

const displaySingleAlbum = function(album) {
    const mainContent = document.querySelector(`.album-button`);
    clearChildren(mainContent);

}

export { displaySingleAlbum }