package org.wcci.apimastery.resources;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Objects;

@Entity
public class AlbumComment {
    @ManyToOne
    @JsonIgnore
    private Album album;
    private String author;
    private String headline;
    private String comment;
    @Id
    @GeneratedValue
    private Long id;

    protected AlbumComment(){

    }

    public AlbumComment(Album album, String author, String headline, String comment) {
        this.album = album;
        this.author = author;
        this.headline = headline;
        this.comment = comment;
    }

    public Album getAlbum() {
        return album;
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

    public Long getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AlbumComment that = (AlbumComment) o;
        return Objects.equals(album, that.album) &&
                Objects.equals(author, that.author) &&
                Objects.equals(headline, that.headline) &&
                Objects.equals(comment, that.comment);
    }

    @Override
    public int hashCode() {
        return Objects.hash(album, author, headline, comment);
    }

    @Override
    public String toString() {
        return "AlbumComment{" +
                "album=" + album +
                ", author='" + author + '\'' +
                ", headline='" + headline + '\'' +
                ", comment='" + comment + '\'' +
                '}';
    }
}
