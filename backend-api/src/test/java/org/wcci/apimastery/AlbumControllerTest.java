package org.wcci.apimastery;


import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import static org.mockito.Mockito.mock;

import org.junit.jupiter.api.Test;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.wcci.apimastery.controllers.AlbumController;
import org.wcci.apimastery.resources.Album;
import org.wcci.apimastery.storage.AlbumStorage;

import java.util.Collections;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

public class AlbumControllerTest {

    private AlbumStorage albumStorage;
    private AlbumController underTest;

    @BeforeEach
    void setUp(){
        albumStorage = mock(AlbumStorage.class);
        underTest = new AlbumController(albumStorage);
        when(albumStorage.retrieveAllAlbums()).thenReturn(Collections.singletonList(new Album("Justin Timberlake", "I like Cheese", "Cheese Parade", "www.picture.com")));

    }

    @Test
    public void shouldRetrieveAllAlbums(){
        Iterable<Album> albums = underTest.retrieveAllAlbums();
        Assertions.assertThat(albums).contains(new Album("Justin Timberlake", "I like Cheese", "Cheese Parade", "www.picture.com"));

    }

    @Test
    public void retrieveAllAlbumsShouldBeMappedCorrectly() throws Exception{
        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(underTest).build();
        mockMvc.perform(get("/api/albums"))
                .andExpect(status().isOk());
    }
}
