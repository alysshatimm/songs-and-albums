package org.wcci.apimastery;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wcci.apimastery.resources.*;
import org.wcci.apimastery.storage.*;

@Component
public class Populator implements CommandLineRunner {

    private AlbumStorage albumStorage;
    private SongRepository songRepo;
    private AlbumCommentRepository albumCommentRepo;
    private AlbumRatingRepository albumRatingRepo;
    private SongCommentRepository songCommentRepo;
    private SongRatingRepository songRatingRepo;

    public Populator(AlbumStorage albumStorage, SongRepository songRepo, AlbumCommentRepository albumCommentRepo, AlbumRatingRepository albumRatingRepo, SongCommentRepository songCommentRepo, SongRatingRepository songRatingRepo) {
        this.albumStorage = albumStorage;
        this.songRepo = songRepo;
        this.albumCommentRepo = albumCommentRepo;
        this.albumRatingRepo = albumRatingRepo;
        this.songCommentRepo = songCommentRepo;
        this.songRatingRepo = songRatingRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        Album four = new Album("Foreigner", "4", "Cheez Wiz", "www.picture.com");
        albumStorage.saveAlbum(four);
        Album merriweatherPostPavillion = new Album("Animal Collective", "Merriweather Post Pavillion", "Big Hat Guys", "www.picture2.com");
        albumStorage.saveAlbum(merriweatherPostPavillion);
        Album whiteBloodCells = new Album("The White Stripes", "White Blood Cells", "Third Man Records", "www.picture3.com");
        albumStorage.saveAlbum(whiteBloodCells);

        Song jukeboxHero = new Song(four, "JukeBox Hero", "3:47", "www.youtube.com");
        songRepo.save(jukeboxHero);
        Song urgent = new Song(four, "Urgent", "2:52", "www.youtube.com");
        songRepo.save(urgent);
        Song myGirls = new Song(merriweatherPostPavillion, "My Girls", "4:30", "www.youtube.com");
        songRepo.save(myGirls);
        Song blueish = new Song(merriweatherPostPavillion, "Blueish", "6:00", "www.youtube.com");
        songRepo.save(blueish);
        Song deadLeaves = new Song(whiteBloodCells, "Dead Leaves and the Dirty Ground", "3:20", "www.youtube.com");
        songRepo.save(deadLeaves);
        Song hotelYorba = new Song(whiteBloodCells, "Hotel Yorba", "2:50", "youtube.com");
        songRepo.save(hotelYorba);

        AlbumComment great = new AlbumComment(four, "David", "Super great!", "Album is so great I can't stand it");
        albumCommentRepo.save(great);
        AlbumComment sucks = new AlbumComment(four, "Levi", "I don't like it", "This album sounds like 1,000 dogs crying");
        albumCommentRepo.save(sucks);
        AlbumComment fun = new AlbumComment(merriweatherPostPavillion, "Abby", "I don't get it", "seriously, I don't get it.");
        albumCommentRepo.save(fun);
        AlbumComment why = new AlbumComment(merriweatherPostPavillion, "Ben", "why?", "How did I get here? Why am I here?");
        albumCommentRepo.save(why);
        AlbumComment yay = new AlbumComment(whiteBloodCells, "Alyssha", "Very Nice!", "Best album ever");
        albumCommentRepo.save(yay);
        AlbumComment ok = new AlbumComment(whiteBloodCells, "David", "It's just ok", "Elephant was better");
        albumCommentRepo.save(ok);

        AlbumRating rating1 = new AlbumRating(four, 5);
        albumRatingRepo.save(rating1);
        AlbumRating rating2 = new AlbumRating(four, 2);
        albumRatingRepo.save(rating2);
        AlbumRating rating3 = new AlbumRating(merriweatherPostPavillion, 4);
        albumRatingRepo.save(rating3);
        AlbumRating rating4 = new AlbumRating(merriweatherPostPavillion, 5);
        albumRatingRepo.save(rating4);
        AlbumRating rating5 = new AlbumRating(whiteBloodCells, 5);
        albumRatingRepo.save(rating5);
        AlbumRating rating6 = new AlbumRating(whiteBloodCells, 2);
        albumRatingRepo.save(rating6);

        SongComment comment1 = new SongComment(jukeboxHero, "David", "Rock on", "I have a great rock collection");
        songCommentRepo.save(comment1);
        SongComment comment2 = new SongComment(urgent, "Bosco", "I'm a dog", "Bark? Woof? Is this thing on?");
        songCommentRepo.save(comment2);
        SongComment comment3 = new SongComment(myGirls, "Bruce", "I'm also a dog", "I like this song a lot though, despite being a dog");
        songCommentRepo.save(comment3);
        SongComment comment4 = new SongComment(blueish, "Cliff", "Cool beans", "Cool cool beans beans, cool beans");
        songCommentRepo.save(comment4);
        SongComment comment5 = new SongComment(deadLeaves, "Maggie", "I like my leaves alive", "Spring is my favorite season");
        songCommentRepo.save(comment5);
        SongComment comment6 = new SongComment(hotelYorba, "Mo", "Lovely Hotel", "Pop pop");
        songCommentRepo.save(comment6);

        SongRating rating7 = new SongRating(jukeboxHero, 4);
        songRatingRepo.save(rating7);
        SongRating rating8 = new SongRating(urgent, 3);
        songRatingRepo.save(rating8);
        SongRating rating9 = new SongRating(myGirls, 5);
        songRatingRepo.save(rating9);
        SongRating rating10 = new SongRating(blueish, 2);
        songRatingRepo.save(rating10);
        SongRating rating11 = new SongRating(deadLeaves, 3);
        songRatingRepo.save(rating11);
        SongRating rating12 = new SongRating(hotelYorba, 4);
        songRatingRepo.save(rating12);

    }
}
