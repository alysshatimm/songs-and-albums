package org.wcci.apimastery.resources;

import javax.persistence.ManyToOne;
import java.util.Objects;

public class SongComment {
    @ManyToOne
    private Song song;
    private String author;
    private String headline;
    private String comment;

    protected SongComment() {

    }

    public SongComment(Song song, String author, String headline, String comment) {
        this.song = song;
        this.author = author;
        this.headline = headline;
        this.comment = comment;
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
        return Objects.equals(song, that.song) &&
                Objects.equals(author, that.author) &&
                Objects.equals(headline, that.headline) &&
                Objects.equals(comment, that.comment);
    }

    @Override
    public int hashCode() {
        return Objects.hash(song, author, headline, comment);
    }

    @Override
    public String toString() {
        return "SongComment{" +
                "album=" + song +
                ", author='" + author + '\'' +
                ", headline='" + headline + '\'' +
                ", comment='" + comment + '\'' +
                '}';
    }
}
