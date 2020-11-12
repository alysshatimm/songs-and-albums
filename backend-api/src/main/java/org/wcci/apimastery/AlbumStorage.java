package org.wcci.apimastery;

import org.springframework.stereotype.Service;
import org.wcci.apimastery.resources.Album;
import org.wcci.apimastery.storage.AlbumRepository;

import java.util.Properties;

@Service
public class AlbumStorage {

    private AlbumRepository albumRepo;

    public AlbumStorage(AlbumRepository albumRepo) { this.albumRepo = albumRepo; }

    public void saveAlbum(Album albumToSave) { albumRepo.save(albumToSave);}

}
