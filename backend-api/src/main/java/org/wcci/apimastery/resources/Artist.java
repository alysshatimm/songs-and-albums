package org.wcci.apimastery.resources;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;
import java.util.Objects;
import java.util.Set;

//Don't need right now - might consider working back in during later versions


public class Artist {
//    private String name;
//    @Id
//    @GeneratedValue
//    private Long id;
//    @OneToMany(mappedBy = "artist")
//    private Set<Album> albums;
//    private Set<Song> songs;
//
//    protected Artist(){
//
//    }
//
//    public Artist(String name) {
//        this.name = name;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public List<Album> getAlbums() {
//        return albums;
//    }
//
//    public List<Song> getSongs() {
//        return songs;
//    }
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        Artist artist = (Artist) o;
//        return Objects.equals(name, artist.name) &&
//                Objects.equals(id, artist.id);
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(name, id);
//    }
//
//    @Override
//    public String toString() {
//        return "Artist{" +
//                "name='" + name + '\'' +
//                ", id=" + id +
//                '}';
//    }
}
