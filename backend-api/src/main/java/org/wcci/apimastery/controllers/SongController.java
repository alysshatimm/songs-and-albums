package org.wcci.apimastery.controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.resources.Album;
import org.wcci.apimastery.resources.Song;
import org.wcci.apimastery.storage.AlbumStorage;
import org.wcci.apimastery.storage.SongRepository;
import org.wcci.apimastery.storage.SongStorage;

@RestController
public class SongController {

    private AlbumStorage albumStorage;
    private SongRepository songRepo;
    private SongStorage songStorage;

    public SongController(AlbumStorage albumStorage, SongRepository songRepo, SongStorage songStorage) {
        this.albumStorage = albumStorage;
        this.songRepo = songRepo;
        this.songStorage = songStorage;
    }

    @DeleteMapping("/api/albums/{id}/song/{id}")
    public Album deleteSongById(@PathVariable Long id) {
        songStorage.deleteSongById(id);
        return albumStorage.retrieveAlbumById(id);

    }
}



//    @DeleteMapping("/api/albums/{id}")
//    public Iterable<Album> deleteAlbumById(@PathVariable Long id) {
//        albumStorage.deleteAlbumById(id);
//        return albumStorage.retrieveAllAlbums();
//    }
//
//
//    @PostMapping("/api/albums/{id}/songs")
//    public Song addSong(@RequestBody Song songToAdd, @PathVariable Long id){
//        Album songAlbum = albumStorage.retrieveAlbumById(id);
//        Song song = new Song (songAlbum, songToAdd.getSongTitle(),songToAdd.getDuration(), songToAdd.getSongLink());
//        songRepo.save(song);
//        return song;
//    }