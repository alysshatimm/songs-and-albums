package org.wcci.apimastery.resources;

import org.wcci.apimastery.resources.Album;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
@Entity
public class SongRating {
    @ManyToOne
    private Song song;
    private int songRating;
    @Id
    @GeneratedValue
    private Long id;

    protected SongRating(){

    }

    public SongRating(Song song, int songRating) {
        this.song = song;
        this.songRating = songRating;
    }

    public Long getId() {
        return id;
    }

    public Song getSong() {
        return song;
    }

    public int getSongRating() {
        return songRating;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SongRating that = (SongRating) o;

        if (songRating != that.songRating) return false;
        if (song != null ? !song.equals(that.song) : that.song != null) return false;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        int result = song != null ? song.hashCode() : 0;
        result = 31 * result + songRating;
        result = 31 * result + (id != null ? id.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "SongRating{" +
                "song=" + song +
                ", songRating=" + songRating +
                ", id=" + id +
                '}';
    }
}
