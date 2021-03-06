package org.wcci.apimastery.controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.resources.Album;
import org.wcci.apimastery.resources.AlbumComment;
import org.wcci.apimastery.resources.Song;
import org.wcci.apimastery.storage.*;

@RestController
public class AlbumController {

    private AlbumStorage albumStorage;
    private SongRepository songRepo;
    private SongStorage songStorage;
    private AlbumCommentRepository albumCommentRepo;
    private AlbumCommentStorage albumCommentStorage;

    public AlbumController(AlbumStorage albumStorage, SongRepository songRepo, SongStorage songStorage, AlbumCommentRepository albumCommentRepo, AlbumCommentStorage albumCommentStorage) {
        this.albumStorage = albumStorage;
        this.songRepo = songRepo;
        this.songStorage = songStorage;
        this.albumCommentRepo = albumCommentRepo;
        this.albumCommentStorage = albumCommentStorage;
    }

    @GetMapping("/api/albums")
    public Iterable<Album> retrieveAllAlbums() {
        return albumStorage.retrieveAllAlbums();
    }

    @GetMapping("/api/albums/{id}")
    public Album retrieveAlbumById(@PathVariable Long id) {
        return albumStorage.retrieveAlbumById(id);
    }

    @PostMapping("/api/albums")
    public Iterable<Album> addAlbum(@RequestBody Album albumToAdd) {
        albumStorage.saveAlbum(albumToAdd);
        return albumStorage.retrieveAllAlbums();
    }

    @PutMapping("/api/albums")
    public Iterable<Album> editAlbum(@RequestBody Album albumToEdit) {
        if (albumToEdit.getId() != null) {
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
    public Song addSong(@RequestBody Song songToAdd, @PathVariable Long id) {
        Album songAlbum = albumStorage.retrieveAlbumById(id);
        Song song = new Song(songAlbum, songToAdd.getSongTitle(), songToAdd.getDuration(), songToAdd.getSongLink());
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

    @PostMapping("/api/albums/{id}/comments")
    public AlbumComment addAlbumComment(@RequestBody AlbumComment albumComment, @PathVariable Long id) {
        Album album = albumStorage.retrieveAlbumById(id);
        AlbumComment comment = new AlbumComment(album, albumComment.getAuthor(), albumComment.getHeadline(), albumComment.getComment());
        albumCommentRepo.save(comment);
        return comment;
    }

    @GetMapping("/api/albums/{id}/comments")
    public Iterable<AlbumComment> retrieveAllAlbumComments(@PathVariable Long id) {
        Album album = albumStorage.retrieveAlbumById(id);
        return album.getAlbumComments();

    }




}
