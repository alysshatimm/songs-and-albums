package org.wcci.apimastery.resources;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
public class Album {
    private String artist;
    private String albumTitle;
    private String recordLabel;
    private String albumArt;
    @Id
    @GeneratedValue
    private Long id;
    @OneToMany(mappedBy = "album", cascade = CascadeType.ALL, orphanRemoval = true)

    private Set<Song> songs;
    @OneToMany(mappedBy = "album" , cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private Set<AlbumRating> albumRatings;
    @OneToMany(mappedBy = "album" , cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private Set<AlbumComment> albumComments;

    protected Album(){

    }

    public Album(String artist, String albumTitle, String recordLabel, String albumArt) {
        this.artist = artist;
        this.albumTitle = albumTitle;
        this.recordLabel = recordLabel;
        this.albumArt = albumArt;
    }

    public String getArtist() {
        return artist;
    }

    public String getAlbumTitle() {
        return albumTitle;
    }

    public String getRecordLabel() {
        return recordLabel;
    }

    public String getAlbumArt() {
        return albumArt;
    }

    public Long getId() {
        return id;
    }

    public Set<Song> getSongs() {
        return songs;
    }

    public Set<AlbumRating> getAlbumRatings() {
        return albumRatings;
    }

    public Set<AlbumComment> getAlbumComments() {
        return albumComments;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Album album = (Album) o;
        return Objects.equals(artist, album.artist) &&
                Objects.equals(albumTitle, album.albumTitle) &&
                Objects.equals(recordLabel, album.recordLabel) &&
                Objects.equals(albumArt, album.albumArt) &&
                Objects.equals(id, album.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(artist, albumTitle, recordLabel, albumArt, id);
    }

    @Override
    public String toString() {
        return "Album{" +
                "artist='" + artist + '\'' +
                ", albumTitle='" + albumTitle + '\'' +
                ", recordLabel='" + recordLabel + '\'' +
                ", albumArt='" + albumArt + '\'' +
                ", id=" + id +
                '}';
    }

    public void changeTitle(String newTitle) { albumTitle = newTitle; }
}
