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
        Album four = new Album("Foreigner", "4", "Cheez Wiz", "https://upload.wikimedia.org/wikipedia/en/e/e4/Foreigner_-_4.jpg");
        albumStorage.saveAlbum(four);
        Album merriweatherPostPavillion = new Album("Animal Collective", "Merriweather Post Pavillion", "Big Hat Guys", "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Animal_Collective_-_Merriweather_Post_Pavilion.png/220px-Animal_Collective_-_Merriweather_Post_Pavilion.png");
        albumStorage.saveAlbum(merriweatherPostPavillion);
        Album whiteBloodCells = new Album("The White Stripes", "White Blood Cells", "Third Man Records", "https://media.pitchfork.com/photos/5929aa18c0084474cd0c1141/1:1/w_600/b39a21f4.jpeg");
        albumStorage.saveAlbum(whiteBloodCells);
        Album mothershipConnection = new Album("Parliment", "Mothership Connection", "Umbrella Time", "https://www.udiscovermusic.com/wp-content/uploads/2015/10/Parliament-Mothership-Connection-album.jpg");
        albumStorage.saveAlbum(mothershipConnection);
        Album drumsAndWires = new Album("XTC", "Drums and Wires", "Yahoo Records", "https://upload.wikimedia.org/wikipedia/en/5/53/XTC_Drums_and_Wires.jpg");
        albumStorage.saveAlbum(drumsAndWires);
        Album awakenMyLove = new Album("Childish Gambino", "Awaken, My Love!", "Big Kid Time", "https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My_Love%21.png");
        albumStorage.saveAlbum(awakenMyLove);
        Album remainInLight = new Album("Talking Heads", "Remain in Light", "Sire Records", "https://media.pitchfork.com/photos/5bbba0095817d4032087c55a/1:1/w_600/talking%20heads_remain%20in%20light.jpg");
        albumStorage.saveAlbum(remainInLight);
        Album getToHeaven = new Album("Everything Everything", "Get To Heaven", "Indie Rock Records", "https://blog.discogs.com/wp-content/uploads/2018/01/everything-everything.jpg");
        albumStorage.saveAlbum(getToHeaven);
        Album marqueeMoon = new Album("Television", "Marquee Moon", "Elektra Records", "https://s3.amazonaws.com/media.thecrimson.com/photos/2018/02/21/214843_1328237.jpg");
        albumStorage.saveAlbum(marqueeMoon);
        Album francesTheMute = new Album("The Mars Volta", "Frances The Mute", "Planet Records", "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/99bd31fd-b68e-4fa6-b351-62173827ac21/67.jpg");
        albumStorage.saveAlbum(francesTheMute);
        Album thirtySixChambers = new Album("Wu-Tang Clan", "36 Chambers", "Loud Records", "https://images-na.ssl-images-amazon.com/images/I/71BUBWTvyhL._SL1500_.jpg");
        albumStorage.saveAlbum(thirtySixChambers);


        Song jukeboxHero = new Song(four, "JukeBox Hero", "3:47", "https://www.youtube.com/watch?v=W_TOsFvnmeQ");
        songRepo.save(jukeboxHero);
        Song urgent = new Song(four, "Urgent", "2:52", "https://www.youtube.com/watch?v=Lcb-Fsx_phM");
        songRepo.save(urgent);
        Song myGirls = new Song(merriweatherPostPavillion, "My Girls", "4:30", "https://www.youtube.com/watch?v=zol2MJf6XNE");
        songRepo.save(myGirls);
        Song blueish = new Song(merriweatherPostPavillion, "Blueish", "6:00", "https://www.youtube.com/watch?v=YTCg1Ovu64E");
        songRepo.save(blueish);
        Song deadLeaves = new Song(whiteBloodCells, "Dead Leaves and the Dirty Ground", "3:20", "https://www.youtube.com/watch?v=7OyytKqYjkE");
        songRepo.save(deadLeaves);
        Song hotelYorba = new Song(whiteBloodCells, "Hotel Yorba", "2:50", "https://www.youtube.com/watch?v=DZPEUyiNcjA");
        songRepo.save(hotelYorba);
        Song pFunk = new Song(mothershipConnection, "P-Funk Wants To Get Funked Up", "7:41", "https://www.youtube.com/watch?v=ZyJzylk8d_M");
        songRepo.save(pFunk);
        Song unfunkyUfo = new Song(mothershipConnection, "Unfunky UFO", "4:24", "https://www.youtube.com/watch?v=JtobYqDQV54");
        songRepo.save(unfunkyUfo);
        Song makingPlans = new Song(drumsAndWires, "Making Plans For Nigel", "5:20", "https://www.youtube.com/watch?v=s29RKnB7l7o");
        songRepo.save(makingPlans);
        Song outsideWorld = new Song(drumsAndWires, "Outside World", "3:18", "https://www.youtube.com/watch?v=UacEJL9QZEM");
        songRepo.save(outsideWorld);
        Song redbone = new Song(awakenMyLove, "Redbone", "5:17", "https://www.youtube.com/watch?v=Kp7eSUU9oy8");
        songRepo.save(redbone);
        Song california = new Song(awakenMyLove, "California", "4:20", "https://www.youtube.com/watch?v=zGTnrUJZVbU&list=PLKV0-mxqLb8evOx8-4EeLEH91AAc5wvdt&index=7");
        songRepo.save(california);
        Song bornUnderPunches = new Song(remainInLight, "Born Under Punches", "3:16", "https://www.youtube.com/watch?v=Y8xdsZhfrcA");
        songRepo.save(bornUnderPunches);
        Song crosseyedAndPainless = new Song(remainInLight, "Crosseyed and Painless", "2:22", "https://www.youtube.com/watch?v=_Zrkf65GmwE");
        songRepo.save(crosseyedAndPainless);
        Song toTheBlade = new Song(getToHeaven, "To The Blade", "5:55", "https://www.youtube.com/watch?v=7EeSjfPQYMs");
        songRepo.save(toTheBlade);
        Song gettoHeaven = new Song(getToHeaven, "Get To Heaven","7:00", "https://www.youtube.com/watch?v=wo9htBgju58");
        songRepo.save(gettoHeaven);
        Song seeNoEvil = new Song(marqueeMoon, "See No Evil", "3:47", "https://www.youtube.com/watch?v=a7L0IYPXKj8");
        songRepo.save(seeNoEvil);
        Song venus = new Song(marqueeMoon, "Venus", "4:45", "https://www.youtube.com/watch?v=4f3d5ZdE4vY");
        songRepo.save(venus);
        Song theWidow = new Song(francesTheMute, "The Widow", "9:56", "https://www.youtube.com/watch?v=VUBQLnEGHNk");
        songRepo.save(theWidow);
        Song lViaLViaquez = new Song(francesTheMute, "L'Via L'Viaquez", "8:56", "https://www.youtube.com/watch?v=VUBQLnEGHNk");
        songRepo.save(lViaLViaquez);
        Song bringDaRuckus = new Song(thirtySixChambers, "Bring Da Ruckus", "4:20", "https://www.youtube.com/watch?v=bhE4bdoWAAE");
        songRepo.save(bringDaRuckus);
        Song cream = new Song(thirtySixChambers, "C.R.E.A.M.", "4:20", "https://www.youtube.com/watch?v=PBwAxmrE194&ab_channel=WuTangClanVEVO");
        songRepo.save(cream);



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
        AlbumComment comment7 = new AlbumComment(mothershipConnection, "George", "PhunkaDelik","Gotta have that FUNK");
        albumCommentRepo.save(comment7);
        AlbumComment comment8 = new AlbumComment(mothershipConnection, "Clinton","Atomic","The aliens know how to party");
        albumCommentRepo.save(comment8);
        AlbumComment comment9 = new AlbumComment(drumsAndWires, "Nigel","On One","The Title says it all");
        albumCommentRepo.save(comment9);
        AlbumComment comment10 = new AlbumComment(drumsAndWires, "Boris", "Boop Beep Boop", "Dun dun nun");
        albumCommentRepo.save(comment10);
        AlbumComment comment11 = new AlbumComment(awakenMyLove, "Danny","Ayyye","Never too old for this ish.");
        albumCommentRepo.save(comment11);
        AlbumComment comment12 = new AlbumComment(awakenMyLove, "Artuer", "Breathtaking", "Bringing back that old style R&B");
        albumCommentRepo.save(comment12);
        AlbumComment comment13 = new AlbumComment(remainInLight, "David", "Edgy","Saw them at CBGB's");
        albumCommentRepo.save(comment13);
        AlbumComment comment14 = new AlbumComment(remainInLight, "Freddy","Yeah","Uh Huh");
        albumCommentRepo.save(comment14);
        AlbumComment comment15 = new AlbumComment(getToHeaven, "Barbara Streisand", "This Album's  Neat-o", "I like to listen to this album while I do my coding homework!");
        albumCommentRepo.save(comment15);
        AlbumComment comment16 = new AlbumComment(getToHeaven, "Jeff Goldblum", "Clever Album", "This album, uh, uh, finds a groove");
        albumCommentRepo.save(comment16);
        AlbumComment comment17 = new AlbumComment(marqueeMoon, "Tony the Tiger", "It's ggrrREEEAAATT!", "This album keeps me company while I eat Frosted Flakes!");
        albumCommentRepo.save(comment17);
        AlbumComment comment18 = new AlbumComment(marqueeMoon, "Betty White", "My favorite casette tape", "When I walk around the mall with my WalkMan, this is my favorite tape to listen to!");
        albumCommentRepo.save(comment18);
        AlbumComment comment19 = new AlbumComment(francesTheMute, "Alyssha", "Drive to Work Jamz", "I try to time my commute to the longer songs - it's awesome!");
        albumCommentRepo.save(comment19);
        AlbumComment comment20 = new AlbumComment(francesTheMute, "David", "From At the Drive In to Now...", "Been rockin' out to this stuff for a MINUTE. Seeing them perform live was the highlight of my life.");
        albumCommentRepo.save(comment20);
        AlbumComment comment21 = new AlbumComment(thirtySixChambers, "Martha Stewart", "Here bc of Snoop", "I'd have never listened to this album if it weren't for my good friend Mr. Dogg. I now play it at all my dinner parties in Cape Cod");
        albumCommentRepo.save(comment21);
        AlbumComment comment22 = new AlbumComment(thirtySixChambers, "Joe Biden", "A.R.E.A.M", "This album rules everything around me. #SWAG.");
        albumCommentRepo.save(comment22);

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
        SongComment comment23 = new SongComment(toTheBlade, "Ting","I was a Butcher Once","It's got a Sharp melody");
        songCommentRepo.save(comment23);
        SongComment comment24 = new SongComment(gettoHeaven, "Peter","Gates are closed.","I got into it, somehow");
        songCommentRepo.save(comment24);
        SongComment comment25 = new SongComment(seeNoEvil, "Ricky", "I hear No Evil","I speak No Evil of this song");
        songCommentRepo.save(comment25);
        SongComment comment26 = new SongComment(venus, "Blaire", "Out of this World", "Ethereal");
        songCommentRepo.save(comment26);
        SongComment comment27 = new SongComment(theWidow, "Omar","Speechless", "I could listen to this over and over and over");
        songCommentRepo.save(comment27);
        SongComment comment28 = new SongComment(lViaLViaquez, "Cedric","Okay", "Here we go");
        songCommentRepo.save(comment28);
        SongComment comment29 = new SongComment(bringDaRuckus,"Charles","HeadBanger", "I play this in the shower in the morning and right before bed");
        songCommentRepo.save(comment29);
        SongComment comment30 = new SongComment(cream, "Midas", "Cash Rules Everything About Me", "Get the Money.");
        songCommentRepo.save(comment30);
        SongComment comment31 = new SongComment(pFunk, "Levi", "Get Funked Up", "But don't forget to get funked down, too. It's dangerous if your funk lasts more than 4 hours.");
        songCommentRepo.save(comment31);
        SongComment comment32 = new SongComment(unfunkyUfo, "Mulder", "I want to Believe", "I listen to this song while I look for UFOs");
        songCommentRepo.save(comment32);
        SongComment comment33 = new SongComment(makingPlans, "All of 2020", "Plans? HA!", "For real, don't make any plans until at least 2021.");
        songCommentRepo.save(comment33);
        SongComment comment34 = new SongComment(outsideWorld, "A Spooky Scary Skeleton", "I don't have outside skin", "I am just made of bones, and am very fragile to the outside world");
        songCommentRepo.save(comment34);
        SongComment comment35 = new SongComment(redbone, "Adultish Gambino", "If you want it", "You can have it");
        songCommentRepo.save(comment35);
        SongComment comment36 = new SongComment(california, "Arizona", "Jealous", "Everyone likes California because they have a beach, but I'm cool, too!!!");
        songCommentRepo.save(comment36);
        SongComment comment37 = new SongComment(bornUnderPunches, "Danny Devito", "I'm the trash man", "I come out, and just start throwing garbage everywhere");
        songCommentRepo.save(comment37);
        SongComment comment38 = new SongComment(crosseyedAndPainless, "Gob Bluth", "Illusions, Michael", "You don't have time for my *illusions*");
        songCommentRepo.save(comment38);


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
