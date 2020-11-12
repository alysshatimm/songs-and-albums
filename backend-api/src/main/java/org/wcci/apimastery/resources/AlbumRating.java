package org.wcci.apimastery.resources;

import org.wcci.apimastery.resources.Album;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class AlbumRating {
    @ManyToOne
    private Album album;
    private int albumRating;
    @Id
    @GeneratedValue
    private Long id;

    protected AlbumRating(){

    }


    public AlbumRating(Album album, int albumRating, Long id) {
        this.album = album;
        this.albumRating = albumRating;
        this.id = id;
    }

    public Album getAlbum() {
        return album;
    }

    public int getAlbumRating() {
        return albumRating;
    }

    public Long getId() {
        return id;
    }
}
