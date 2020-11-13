package org.wcci.apimastery;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.wcci.apimastery.resources.*;
import org.wcci.apimastery.storage.*;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class JpaWiringTest {
    @Autowired
    private AlbumRepository albumRepo;
    @Autowired
    private TestEntityManager entityManager;
    @Autowired
    private SongRepository songRepo;
    @Autowired
    private AlbumRatingRepository albumRatingRepo;
    @Autowired
    private AlbumCommentRepository albumCommentRepo;
    @Autowired
    private SongRatingRepository songRatingRepo;
    @Autowired
    private SongCommentRepository songCommentRepo;

    Album testAlbum = new Album("Justin Timberlake", "Cheese Parade", "Gouda Records", "www.picture.com");
    Song testSong = new Song(testAlbum, "Getaway", "0:00", "http://stuff.com");


    private void flushAndClear() {
        entityManager.flush();
        entityManager.clear();
    }


    @Test
    public void albumRepoShouldSaveAndRetrieveAlbumObjects() {
        albumRepo.save(testAlbum);
        flushAndClear();
        Album retrievedAlbum = albumRepo.findById(testAlbum.getId()).get();
        assertThat(retrievedAlbum).isEqualTo(testAlbum);
    }

    @Test
    public void songRepoShouldSaveAndRetrieveSongObjects() {
        albumRepo.save(testAlbum);
        songRepo.save(testSong);
        flushAndClear();
        Song retrievedSong = songRepo.findById(testSong.getId()).get();
        assertThat(retrievedSong).isEqualTo(testSong);
    }

    @Test
    public void albumHasManySongs() {
        albumRepo.save(testAlbum);
        Song testSong1 = new Song(testAlbum, "Getaway", "0:00", "http://stuff.com");
        Song testSong2 = new Song(testAlbum, "GetawayFromAbby", "0:00", "http://stuff.com");
        songRepo.save(testSong1);
        songRepo.save(testSong2);
        flushAndClear();
        Album retrievedAlbum = albumRepo.findById(testAlbum.getId()).get();
        assertThat(retrievedAlbum.getSongs()).contains(testSong1, testSong2);
        assertThat(retrievedAlbum).isEqualTo(testAlbum);
    }

    @Test
    public void albumShouldHaveManyRatings() {
        albumRepo.save(testAlbum);
        AlbumRating testrating1 = new AlbumRating(testAlbum, 5);
        AlbumRating testrating2 = new AlbumRating(testAlbum, 1);
        albumRatingRepo.save(testrating1);
        albumRatingRepo.save(testrating2);
        flushAndClear();
        Album retrievedAlbum = albumRepo.findById(testAlbum.getId()).get();
        assertThat(retrievedAlbum.getAlbumRatings()).contains(testrating1, testrating2);
        assertThat(retrievedAlbum).isEqualTo(testAlbum);
    }

    @Test
    public void albumShouldHaveManyComments() {
        albumRepo.save(testAlbum);
        AlbumComment testComment1 = new AlbumComment(testAlbum, "Animal", "This Album Rocks", "This album is literally made of rock.");
        AlbumComment testComment2 = new AlbumComment(testAlbum, "Mineral", "This Album Stinks", "This album is literally made of sulfur.");
        albumCommentRepo.save(testComment1);
        albumCommentRepo.save(testComment2);
        flushAndClear();
        Album retrievedAlbum = albumRepo.findById(testAlbum.getId()).get();
        assertThat(retrievedAlbum.getAlbumComments()).contains(testComment1, testComment2);
        assertThat(retrievedAlbum).isEqualTo(testAlbum);
    }

    @Test
    public void songShouldHaveManyRatings() {
        albumRepo.save(testAlbum);
        songRepo.save(testSong);
        SongRating testRating1 = new SongRating(testSong, 5);
        SongRating testRating2 = new SongRating(testSong, 1);
        songRatingRepo.save(testRating1);
        songRatingRepo.save(testRating2);
        flushAndClear();
        Song retrievedSong = songRepo.findById(testSong.getId()).get();
        assertThat(retrievedSong.getSongRatings()).contains(testRating1, testRating2);
        assertThat(retrievedSong).isEqualTo(testSong);
    }

    @Test
    public void songShouldHaveManyComments() {
        albumRepo.save(testAlbum);
        songRepo.save(testSong);
        SongComment testComment1 = new SongComment(testSong, "Bill Hicks", "Jury Duty", "Sweet Berry Wine");
        SongComment testComment2 = new SongComment(testSong, "Big Daddy Kane", "Slaps", "IT really do be like that,sometimes");
        songCommentRepo.save(testComment1);
        songCommentRepo.save(testComment2);
        flushAndClear();
        Song retrievedSong = songRepo.findById(testSong.getId()).get();
        assertThat(retrievedSong.getSongComments()).contains(testComment1, testComment2);
        assertThat(retrievedSong).isEqualTo(testSong);
    }

}