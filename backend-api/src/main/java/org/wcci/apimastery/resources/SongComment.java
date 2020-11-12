package org.wcci.apimastery.resources;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Objects;
@Entity
public class SongComment {
    @ManyToOne
    private Song song;
    private String author;
    private String headline;
    private String comment;
    @Id
    @GeneratedValue
    private Long id;

    protected SongComment() {

    }

    public SongComment(Song song, String author, String headline, String comment) {
        this.song = song;
        this.author = author;
        this.headline = headline;
        this.comment = comment;
    }

    public Long getId() {
        return id;
    }

    public Song getSong() {
        return song;
    }

    public String getAuthor() {
        return author;
    }

    public String getHeadline() {
        return headline;
    }

    public String getComment() {
        return comment;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SongComment that = (SongComment) o;

        if (song != null ? !song.equals(that.song) : that.song != null) return false;
        if (author != null ? !author.equals(that.author) : that.author != null) return false;
        if (headline != null ? !headline.equals(that.headline) : that.headline != null) return false;
        if (comment != null ? !comment.equals(that.comment) : that.comment != null) return false;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        int result = song != null ? song.hashCode() : 0;
        result = 31 * result + (author != null ? author.hashCode() : 0);
        result = 31 * result + (headline != null ? headline.hashCode() : 0);
        result = 31 * result + (comment != null ? comment.hashCode() : 0);
        result = 31 * result + (id != null ? id.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "SongComment{" +
                "song=" + song +
                ", author='" + author + '\'' +
                ", headline='" + headline + '\'' +
                ", comment='" + comment + '\'' +
                ", id=" + id +
                '}';
    }
}
