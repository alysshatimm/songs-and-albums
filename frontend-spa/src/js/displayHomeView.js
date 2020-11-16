import {
    displaySingleAlbum
} from "./displaySingleAlbum.js"

const displayHomeView = function(albums) {
    const mainElement = document.createElement("main");
    mainElement.classList.add("container dropdown template-album")
        // const sectionElement = document.createElement("section");
        // sectionElement.classList.add("campus-list");
        // mainElement.appendChild(sectionElement);

    // let campusListHtml = "";

    albums.forEach(album => {
        let albumButton = document.createElement('button')
        albumButton.classList.add("dropbtn");
        let albumImage = document.createElement("img");
        albumImage.classList.add("album-art")
        let albumArtist = document.createElement("h2");
        albumArtist.classList.add("artist")
        let albumName = document.createElement("h3");
        albumName.classList.add("album-name")
        let recordLabel = document.createElement("h4");
        recordLabel.classList.add("record-label")
        albumButton.appendChild(albumImage);
        albumButton.appendChild(albumArtist);
        albumButton.appendChild(albumName);
        albumButton.appendChild(recordLabel);

        campusLocationElement.innerText = campus.location;
        campusLocationElement.addEventListener('click', () => displaySingleCampus(campus));
        let campusTechStackElement = document.createElement("h3");
        campusTechStackElement.classList.add("campus-tech-stack");
        campusTechStackElement.innerText = campus.techStack;
        campusElement.appendChild(campusLocationElement);
        campusElement.appendChild(campusTechStackElement);
        sectionElement.appendChild(campusElement);
    });

    return mainElement;
}


export {
    displayHomeView
}