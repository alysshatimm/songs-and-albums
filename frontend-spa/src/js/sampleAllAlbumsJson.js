import { displayHomeView } from "./displayHomeView.js"


const allAlbums = [ {
    "artist": "Foreigner",
    "albumTitle": "4",
    "recordLabel": "Cheez Wiz",
    "albumArt": "https://upload.wikimedia.org/wikipedia/en/e/e4/Foreigner_-_4.jpg",
    "id": 1,
    "songs": [
      {
        "songTitle": "Urgent",
        "duration": "2:52",
        "songLink": "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
        "id": 13
      },
      {
        "songTitle": "JukeBox Hero",
        "duration": "3:47",
        "songLink": "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
        "id": 12
      }
    ]
  },
  {
    "artist": "Animal Collective",
    "albumTitle": "Merriweather Post Pavillion",
    "recordLabel": "Big Hat Guys",
    "albumArt": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Animal_Collective_-_Merriweather_Post_Pavilion.png/220px-Animal_Collective_-_Merriweather_Post_Pavilion.png",
    "id": 2,
    "songs": [
      {
        "songTitle": "Blueish",
        "duration": "6:00",
        "songLink": "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
        "id": 15
      },
      {
        "songTitle": "My Girls",
        "duration": "4:30",
        "songLink": "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
        "id": 14
      }
    ]
  },
  {
    "artist": "The White Stripes",
    "albumTitle": "White Blood Cells",
    "recordLabel": "Third Man Records",
    "albumArt": "https://media.pitchfork.com/photos/5929aa18c0084474cd0c1141/1:1/w_600/b39a21f4.jpeg",
    "id": 3,
    "songs": [
      {
        "songTitle": "Dead Leaves and the Dirty Ground",
        "duration": "3:20",
        "songLink": "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
        "id": 16
      },
      {
        "songTitle": "Hotel Yorba",
        "duration": "2:50",
        "songLink": "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
        "id": 17
      }
    ]
  },
  {
    "artist": "Parliment",
    "albumTitle": "Mothership Connection",
    "recordLabel": "Umbrella Time",
    "albumArt": "https://www.udiscovermusic.com/wp-content/uploads/2015/10/Parliament-Mothership-Connection-album.jpg",
    "id": 4,
    "songs": [
      {
        "songTitle": "P-Funk Wants To Get Funked Up",
        "duration": "7:41",
        "songLink": "https://www.youtube.com/watch?v=ZyJzylk8d_M",
        "id": 18
      },
      {
        "songTitle": "Unfunky UFO",
        "duration": "4:24",
        "songLink": "https://www.youtube.com/watch?v=JtobYqDQV54",
        "id": 19
      }
    ]
  },
  {
    "artist": "XTC",
    "albumTitle": "Drums and Wires",
    "recordLabel": "Yahoo Records",
    "albumArt": "https://upload.wikimedia.org/wikipedia/en/5/53/XTC_Drums_and_Wires.jpg",
    "id": 5,
    "songs": [
      {
        "songTitle": "Outside World",
        "duration": "3:18",
        "songLink": "https://www.youtube.com/watch?v=UacEJL9QZEM",
        "id": 21
      },
      {
        "songTitle": "Making Plans For Nigel",
        "duration": "5:20",
        "songLink": "https://www.youtube.com/watch?v=s29RKnB7l7o",
        "id": 20
      }
    ]
  },
  {
    "artist": "Childish Gambino",
    "albumTitle": "Awaken, My Love!",
    "recordLabel": "Big Kid Time",
    "albumArt": "https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My_Love%21.png",
    "id": 6,
    "songs": [
      {
        "songTitle": "California",
        "duration": "4:20",
        "songLink": "https://www.youtube.com/watch?v=zGTnrUJZVbU&list=PLKV0-mxqLb8evOx8-4EeLEH91AAc5wvdt&index=7",
        "id": 23
      },
      {
        "songTitle": "Redbone",
        "duration": "5:17",
        "songLink": "https://www.youtube.com/watch?v=Kp7eSUU9oy8",
        "id": 22
      }
    ]
  },
  {
    "artist": "Talking Heads",
    "albumTitle": "Remain in Light",
    "recordLabel": "Sire Records",
    "albumArt": "https://media.pitchfork.com/photos/5bbba0095817d4032087c55a/1:1/w_600/talking%20heads_remain%20in%20light.jpg",
    "id": 7,
    "songs": []
  },
  {
    "artist": "Everything Everything",
    "albumTitle": "Get To Heaven",
    "recordLabel": "Indie Rock Records",
    "albumArt": "https://blog.discogs.com/wp-content/uploads/2018/01/everything-everything.jpg",
    "id": 8,
    "songs": []
  },
  {
    "artist": "Television",
    "albumTitle": "Marquee Moon",
    "recordLabel": "Elektra Records",
    "albumArt": "https://s3.amazonaws.com/media.thecrimson.com/photos/2018/02/21/214843_1328237.jpg",
    "id": 9,
    "songs": []
  },
  {
    "artist": "The Mars Volta",
    "albumTitle": "Frances The Mute",
    "recordLabel": "Planet Records",
    "albumArt": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/99bd31fd-b68e-4fa6-b351-62173827ac21/67.jpg",
    "id": 10,
    "songs": []
  },
  {
    "artist": "Wu-Tang Clan",
    "albumTitle": "36 Chambers",
    "recordLabel": "Loud Records",
    "albumArt": "https://images-na.ssl-images-amazon.com/images/I/71BUBWTvyhL._SL1500_.jpg",
    "id": 11,
    "songs": []
  }
]

export { allAlbums }