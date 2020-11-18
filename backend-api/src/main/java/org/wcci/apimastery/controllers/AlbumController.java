package org.wcci.apimastery.controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.resources.Album;
import org.wcci.apimastery.resources.Song;
import org.wcci.apimastery.storage.AlbumStorage;
import org.wcci.apimastery.storage.SongRepository;
import org.wcci.apimastery.storage.SongStorage;

@RestController
public class AlbumController {

    private AlbumStorage albumStorage;
    private SongRepository songRepo;
    private SongStorage songStorage;

    public AlbumController(AlbumStorage albumStorage, SongRepository songRepo, SongStorage songStorage) {
        this.albumStorage = albumStorage;
        this.songRepo = songRepo;
        this.songStorage = songStorage;
    }

    @GetMapping("/api/albums")
    public Iterable<Album> retrieveAllAlbums() {return albumStorage.retrieveAllAlbums();}

    @GetMapping("/api/albums/{id}")
    public Album retrieveAlbumById(@PathVariable Long id) {return albumStorage.retrieveAlbumById(id);}

    @PostMapping("/api/albums")
    public Iterable<Album> addAlbum(@RequestBody Album albumToAdd){
        albumStorage.saveAlbum(albumToAdd);
        return albumStorage.retrieveAllAlbums();
    }

    @PutMapping("/api/albums")
    public Iterable<Album> editAlbum(@RequestBody Album albumToEdit){
        if(albumToEdit.getId()!=null){
            albumStorage.saveAlbum(albumToEdit);
        }
        return albumStorage.retrieveAllAlbums();
    }
    @DeleteMapping("/api/albums/{id}")
    public Iterable<Album> deleteAlbumById(@PathVariable Long id) {
        albumStorage.deleteAlbumById(id);
        return albumStorage.retrieveAllAlbums();
    }
    @PostMapping("/api/albums/{id}/songs")
    public Song addSong(@RequestBody Song songToAdd, @PathVariable Long id){
        Album songAlbum = albumStorage.retrieveAlbumById(id);
        Song song = new Song (songAlbum, songToAdd.getSongTitle(),songToAdd.getDuration(), songToAdd.getSongLink());
        songRepo.save(song);
        return song;
    }

    @PatchMapping("/api/albums/{id}/albumTitle")
    public Album changeAlbumTitle(@RequestBody String newTitle, @PathVariable Long id) {
        Album albumToChangeTitle = albumStorage.retrieveAlbumById(id);
        albumToChangeTitle.changeTitle(newTitle);
        albumStorage.saveAlbum(albumToChangeTitle);
        return albumToChangeTitle;
    }
}
