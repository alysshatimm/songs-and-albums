package org.wcci.apimastery.resources;

import org.wcci.apimastery.resources.Album;

import javax.persistence.ManyToOne;

public class SongRating {
    private Song song;
    @ManyToOne
    private int songRating;

    protected SongRating(){

    }

    public SongRating(Song song, int songRating) {
        this.song = song;
        this.songRating = songRating;
    }

    public Song getSong() {
        return song;
    }

    public int getSongRating() {
        return songRating;
    }
}
