package org.wcci.apimastery.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.wcci.apimastery.resources.Album;
import org.wcci.apimastery.resources.Song;
import org.wcci.apimastery.storage.AlbumStorage;
import org.wcci.apimastery.storage.SongRepository;

@RestController
public class SongController {

    private AlbumStorage albumStorage;
    private SongRepository songRepo;


//    @PostMapping("/api/albums/{id}/songs")
//    public Iterable<Song> addSong(@RequestBody Song songToAdd, @PathVariable Long id){
//        songRepo.save(songToAdd);
//        return (Iterable<Song>) albumStorage.retrieveAlbumById(songToAdd.getId());
//    }
}
