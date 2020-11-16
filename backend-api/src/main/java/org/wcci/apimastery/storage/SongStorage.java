package org.wcci.apimastery.storage;

import org.springframework.stereotype.Service;
import org.wcci.apimastery.resources.Song;

@Service
public class SongStorage {
    private SongRepository songRepo;

    public SongStorage(SongRepository songRepo) {
        this.songRepo = songRepo;
    }

    public void saveSong(Song songToSave){
        songRepo.save(songToSave);
    }

    public Song retrieveSongById(Long id){return songRepo.findById(id).get();}

    public void deleteSongById(Long id){songRepo.deleteById(id);};


}
