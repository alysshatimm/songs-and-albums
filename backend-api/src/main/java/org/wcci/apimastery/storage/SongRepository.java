package org.wcci.apimastery.storage;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.resources.Album;
import org.wcci.apimastery.resources.Song;

public interface SongRepository extends CrudRepository<Song, Long> {

//    Song retrieveAllSongs(String title);
}
