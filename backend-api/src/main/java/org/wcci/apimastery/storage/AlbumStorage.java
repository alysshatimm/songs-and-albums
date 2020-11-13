package org.wcci.apimastery.storage;

import org.springframework.stereotype.Service;
import org.wcci.apimastery.resources.Album;
import org.wcci.apimastery.resources.Song;
import org.wcci.apimastery.storage.AlbumRepository;

import java.util.Properties;

@Service
public class AlbumStorage {

    private AlbumRepository albumRepo;

    public AlbumStorage(AlbumRepository albumRepo) { this.albumRepo = albumRepo; }

    public void saveAlbum(Album albumToSave) { albumRepo.save(albumToSave);}


    public Iterable<Album> retrieveAllAlbums() {
        return albumRepo.findAll();
    }

    public Album retrieveAlbumById(Long id) {
        return albumRepo.findById(id).get();
    }

    public void deleteAlbumById(Long id) {
        albumRepo.deleteById(id);
    }

}
