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


    public AlbumRating(Album album, int albumRating) {
        this.album = album;
        this.albumRating = albumRating;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AlbumRating that = (AlbumRating) o;

        if (albumRating != that.albumRating) return false;
        if (album != null ? !album.equals(that.album) : that.album != null) return false;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        int result = album != null ? album.hashCode() : 0;
        result = 31 * result + albumRating;
        result = 31 * result + (id != null ? id.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "AlbumRating{" +
                "album=" + album +
                ", albumRating=" + albumRating +
                ", id=" + id +
                '}';
    }
}
