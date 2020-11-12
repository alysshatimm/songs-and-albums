package org.wcci.apimastery;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wcci.apimastery.storage.*;

@Component
public class Populator implements CommandLineRunner {

    private AlbumStorage albumStorage;
    private SongRepository songRepo;
    private AlbumCommentRepository albumCommentRepo;
    private AlbumRatingRepository albumRatingRepo;
    private SongCommentRepository songCommentRepo;
    private SongRatingRepository songRatingRepo;

    public Populator(AlbumStorage albumStorage, SongRepository songRepo, AlbumCommentRepository albumCommentRepo, AlbumRatingRepository albumRatingRepo, SongCommentRepository songCommentRepo, SongRatingRepository songRatingRepo) {
        this.albumStorage = albumStorage;
        this.songRepo = songRepo;
        this.albumCommentRepo = albumCommentRepo;
        this.albumRatingRepo = albumRatingRepo;
        this.songCommentRepo = songCommentRepo;
        this.songRatingRepo = songRatingRepo;
    }

    @Override
    public void run(String... args) throws Exception {

    }
}
