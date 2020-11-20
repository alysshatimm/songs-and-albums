package org.wcci.apimastery.controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.resources.Album;
import org.wcci.apimastery.resources.Song;
import org.wcci.apimastery.resources.SongComment;
import org.wcci.apimastery.storage.AlbumStorage;
import org.wcci.apimastery.storage.SongCommentRepository;
import org.wcci.apimastery.storage.SongRepository;
import org.wcci.apimastery.storage.SongStorage;

@RestController
public class SongController {

    private AlbumStorage albumStorage;
    private SongRepository songRepo;
    private SongStorage songStorage;
    private SongCommentRepository songCommentRepo;

    public SongController(AlbumStorage albumStorage, SongRepository songRepo, SongStorage songStorage, SongCommentRepository songCommentRepo) {
        this.albumStorage = albumStorage;
        this.songRepo = songRepo;
        this.songStorage = songStorage;
        this.songCommentRepo = songCommentRepo;
    }

    @DeleteMapping("/api/songs/{id}")
        public Album deleteSong(@PathVariable Long id){
        Album songAlbum = songStorage.retrieveSongById(id).getAlbum();
        songStorage.deleteSongById(id);
        return albumStorage.retrieveAlbumById(songAlbum.getId());
    }

    @PatchMapping("/api/songs/{id}/songTitle")
        public Song changeSongTitle(@RequestBody String newSongTitle, @PathVariable Long id) {
        Song songToChange = songStorage.retrieveSongById(id);
        songToChange.changeSongTitle(newSongTitle);
        songStorage.saveSong(songToChange);
        return songToChange;
    }
    @PostMapping("/api/songs/{id}/comments")
    public SongComment addSongComment(@RequestBody SongComment songComment, @PathVariable Long id){
        Song song = songStorage.retrieveSongById(id);
        SongComment comment = new SongComment(song, songComment.getAuthor(), songComment.getHeadline(), songComment.getComment());
        songCommentRepo.save(comment);
        return comment;
    }
    @GetMapping ("/api/songs/{id}")
    public Song retrieveSongById(@PathVariable Long id){
        return songStorage.retrieveSongById(id);
    }

    @GetMapping("/api/song/{id}/comments")
    public Iterable<SongComment> retrieveAllComments(@PathVariable Long id) {
        Song song = songStorage.retrieveSongById(id);
        return song.getSongComments();
    }


}



