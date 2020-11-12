package org.wcci.apimastery.controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.resources.Album;
import org.wcci.apimastery.storage.AlbumStorage;

@RestController
public class AlbumController {

    private AlbumStorage albumStorage;

    public AlbumController(AlbumStorage albumStorage) {this.albumStorage = albumStorage;}

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
}
