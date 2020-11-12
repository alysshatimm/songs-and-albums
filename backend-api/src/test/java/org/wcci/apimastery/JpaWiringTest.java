package org.wcci.apimastery;


import org.h2.store.FileLock;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.wcci.apimastery.resources.Album;
import org.wcci.apimastery.resources.Song;
import org.wcci.apimastery.storage.AlbumRepository;

import java.util.Properties;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class JpaWiringTest {
    @Autowired
    private AlbumRepository albumRepo;
    @Autowired
    private TestEntityManager entityManager;
    @Autowired
    private SongRepository songRepo;

    Album testAlbum = new Album("Justin Timberlake", "Cheese Parade", "Gouda Records", "www.picture.com");



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
        Song testSong = new Song(testAlbum,"Getaway","0:00", "http://stuff.com");
        songRepo.save(testSong);
        flushAndClear();
        Song retrievedSong = songRepo.findById(testSong.getId()).get();
        assertThat(retrievedSong).isEqualTo(testSong);
    }
    @Test
    public void albumHasManySongs(){
        albumRepo.save(testAlbum);
        Song testSong1 = new Song(testAlbum,"Getaway","0:00", "http://stuff.com");
        Song testSong2 = new Song(testAlbum,"GetawayFromAbby","0:00", "http://stuff.com");
        songRepo.save(testSong1);
        songRepo.save(testSong2);
        flushAndClear();
        Album retrievedAlbum = albumRepo.findById(testAlbum.getId()).get();
        assertThat(retrievedAlbum.getSongs()).contains(testSong1,testSong2);
        assertThat(retrievedAlbum).isEqualTo(testAlbum);

    }

}