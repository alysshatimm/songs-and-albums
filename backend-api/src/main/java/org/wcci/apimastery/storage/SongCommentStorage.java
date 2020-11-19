package org.wcci.apimastery.storage;


import org.springframework.stereotype.Service;
import org.wcci.apimastery.resources.Song;
import org.wcci.apimastery.resources.SongComment;

@Service
public class SongCommentStorage {
    private SongCommentRepository songCommentRepo;
    private SongStorage songStorage;

    public SongCommentStorage(SongCommentRepository songCommentRepo, SongStorage songStorage) {
        this.songCommentRepo = songCommentRepo;
        this.songStorage = songStorage;
    }

    public Iterable <SongComment> findSongCommentsBySongId(Long id) {
        songStorage.retrieveSongById(id);
        return songCommentRepo.findAll();
    }

    public SongComment retrieveSongCommentById(Long id){return songCommentRepo.findById(id).get();}
}
