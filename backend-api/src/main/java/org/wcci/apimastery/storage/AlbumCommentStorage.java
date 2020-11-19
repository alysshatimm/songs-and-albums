package org.wcci.apimastery.storage;


import org.springframework.stereotype.Service;
import org.wcci.apimastery.resources.AlbumComment;

@Service
public class AlbumCommentStorage {
   private AlbumCommentRepository albumCommentRepo;
   private AlbumStorage albumStorage;

    public AlbumCommentStorage(AlbumCommentRepository albumCommentRepo, AlbumStorage albumStorage) {
        this.albumCommentRepo = albumCommentRepo;
        this.albumStorage = albumStorage;
    }
    public Iterable <AlbumComment> findAlbumCommentsByAlbumId(Long id) {
        albumStorage.retrieveAlbumById(id);
        return albumCommentRepo.findAll();
    }

    public AlbumComment retrieveAlbumCommentById(Long id){return albumCommentRepo.findById(id).get();}
}
