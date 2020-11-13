package org.wcci.apimastery;

import org.junit.jupiter.api.BeforeEach;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.wcci.apimastery.controllers.AlbumController;
import org.wcci.apimastery.controllers.SongController;
import org.wcci.apimastery.resources.Album;
import org.wcci.apimastery.resources.Song;
import org.wcci.apimastery.storage.AlbumStorage;
import org.wcci.apimastery.storage.SongRepository;

import java.util.Collections;

public class SongControllerTest {

    private SongRepository songRepo;
    private SongController underTest;
    private AlbumStorage albumStorage;
    private AlbumController albumController;
    private Album album;
//
//    @BeforeEach
//    void setUp(){
//        album = mock(Album.class);
//        songRepo = mock(SongRepository.class);
//        underTest = new SongController(songRepo);
//        when(songRepo.retrieveAllSongs(album.getAlbumTitle())).thenReturn(Collections.singletonList(new Song(album, "Big Cheese", "2:30", "youtube.com")));
//    }

}
