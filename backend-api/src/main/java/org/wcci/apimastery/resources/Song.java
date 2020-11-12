package org.wcci.apimastery.resources;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
public class Song {
    @ManyToOne
    private Album album;
    private String songTitle;
    private String duration;
    private String songLink;
    @Id
    @GeneratedValue
    private Long id;
    @OneToMany(mappedBy = "song")
    private Set<SongRating> songRatings;
    @OneToMany(mappedBy = "song")
    private Set<SongComment> songComments;

    protected Song() {

    }

    public Song(Album album, String songTitle, String duration, String songLink) {
        this.album = album;
        this.songTitle = songTitle;
        this.duration = duration;
        this.songLink = songLink;
    }

    public Album getAlbum() {
        return album;
    }

    public String getSongTitle() {
        return songTitle;
    }

    public String getDuration() {
        return duration;
    }

    public String getSongLink() {
        return songLink;
    }

    public Long getId() {
        return id;
    }

    public Set<SongRating> getSongRatings() {
        return songRatings;
    }

    public Set<SongComment> getSongComments() {
        return songComments;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Song song = (Song) o;
        return Objects.equals(album, song.album) &&
                Objects.equals(songTitle, song.songTitle) &&
                Objects.equals(duration, song.duration) &&
                Objects.equals(songLink, song.songLink) &&
                Objects.equals(id, song.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(album, songTitle, duration, songLink, id);
    }

    @Override
    public String toString() {
        return "Song{" +
                "album=" + album +
                ", songTitle='" + songTitle + '\'' +
                ", duration='" + duration + '\'' +
                ", songLink='" + songLink + '\'' +
                ", id=" + id +
                '}';
    }
}
