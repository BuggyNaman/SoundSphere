 🎵 Sound Sphere - A music PLayer

A simple music player web application that fetches albums and songs dynamically and allows users to play, pause, and navigate through tracks.

 📌 Features
- Fetches albums and song lists dynamically from the `/songs/` directory.
- Play, pause, and skip tracks with buttons or keyboard shortcuts.
- Highlights the currently playing song.
- Implements a seek bar to jump to specific parts of the song.
- Volume control for adjusting playback sound.
- Album and song details displayed dynamically.
- Keyboard shortcuts for easy navigation:
  - `Space`: Play/Pause
  - `ArrowRight`: Next song
  - `ArrowLeft`: Previous song
  - `M`: Toggle menu

 🛠️ Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/spotify-clone.git
   cd spotify-clone
   ```
2. Run a local server (e.g., using VS Code Live Server):
  
3. Open `spotify.html` in a browser.

 📁 Project Structure
```
Spotify
├── songs
│   ├── Arijit Singh
│   │   ├── Ae Dil Hai Mushkil.mp3
│   │   ├── Agar Tum Saath Ho.mp3
│   │   ├── Baatein Ye Kabhi Na.mp3
│   │   ├── Haan Main Galat.mp3
│   │   ├── Haareya.mp3
│   │   ├── Hawayein.mp3
│   │   ├── Humdard.mp3
│   │   ├── Ik Vaari Aa.mp3
│   │   ├── Ilahi.mp3
│   │   ├── Janam Janam.mp3
│   │   ├── Woh Din.mp3
│   │   ├── Yeh Fitoor.mp3
│   │   ├── cover.jpeg
│   │   └── info.json
│   ├── Atif Aslam
│   │   ├── Dekhte Dekhte.mp3
│   │   ├── Dil Diyan Gallan.mp3
│   │   ├── Janam Janam.mp3
│   │   ├── Jeena Jeena.mp3
│   │   ├── Main Agar.mp3
│   │   ├── Main Rang Sharbaton Ka.mp3
│   │   ├── O Saathi.mp3
│   │   ├── Paniyon Sa.mp3
│   │   ├── cover.jpeg
│   │   └── info.json
│   ├── Ek Tha Raja
│   │   ├── AMG Ft. Mehar Vaani.mp3
│   │   ├── Alag Hai Ft. Fotty Seven.mp3
│   │   ├── Bajenge Ft. Seedhe Maut.mp3
│   │   ├── Body On Me Ft. Nora Fatehi.mp3
│   │   ├── Daaku Ft. Sharvi Yadav.mp3
│   │   ├── Drinks On Me Ft. MC STAN.mp3
│   │   ├── G-Yaan.mp3
│   │   ├── God Damn Ft. Karan Aujla.mp3
│   │   ├── Hola At Your Boy Ft. KRSNA.mp3
│   │   ├── Kalashnikova Ft. Draganov.mp3
│   │   ├── Like A Snake Ft. Raftaar.mp3
│   │   ├── Naraaz Ft. Dino James & IKKA.mp3
│   │   ├── O Sajna Ft. DIVINE.mp3
│   │   ├── Soulmate Ft. Arijit Singh.mp3
│   │   ├── Surma.mp3
│   │   ├── cover.jpeg
│   │   └── info.json
│   ├── Hard Drive Vol. 2
│   │   ├── ADVICE.mp3
│   │   ├── BAAWE.mp3
│   │   ├── BANJO BOUNCE.mp3
│   │   ├── DEHSHAT HO.mp3
│   │   ├── MERA PARICHAY.mp3
│   │   ├── MUNDE HOOD DE.mp3
│   │   ├── RAP-TA.mp3
│   │   ├── REAL SHIT.mp3
│   │   ├── cover.jpeg
│   │   └── info.json
│   ├── Rahat Fateh Ali Khan
│   │   ├── Aafreen Reprise Azaan.mp3
│   │   ├── Ajj Din Chadheya.mp3
│   │   ├── Dagabaaz Re.mp3
│   │   ├── Dil To Bachcha Hai.mp3
│   │   ├── Jag Ghoomeya.mp3
│   │   ├── Jag Soona Soona Lage.mp3
│   │   ├── cover.jpeg
│   │   └── info.json
│   ├── Sachin Jigar
│   │   ├── Aayi Nai.mp3
│   │   ├── Bezubaan Kab Se.mp3
│   │   ├── Dua Karo Street Dancer.mp3
│   │   ├── Jee Karda Rock Version.mp3
│   │   ├── Jeene Laga Hoon.mp3
│   │   ├── Love You Zindagi.mp3
│   │   ├── Saibo.mp3
│   │   ├── Tum Se.mp3
│   │   ├── cover.jpeg
│   │   └── info.json
│   ├── Still Here
│   │   ├── Dream.mp3
│   │   ├── Fall Off (Interlude).mp3
│   │   ├── Living Legend (feat. Rashmeet Kaur.mp3
│   │   ├── Na Hai Time.mp3
│   │   ├── Roll Up (feat. Badshah).mp3
│   │   ├── Saza-E-Maut (feat. Raftaar).mp3
│   │   ├── Still Here (Intro).mp3
│   │   ├── Villain (feat. Karma, Ikka).mp3
│   │   ├── What's My Name.mp3
│   │   ├── cover.jpeg
│   │   └── info.json
│   └── Vishal Shekhar
│       ├── 440 Volt.mp3
│       ├── Baby Ko Bass Pasand Hai.mp3
│       ├── Bahara.mp3
│       ├── Bin Tere.mp3
│       ├── Bulleya.mp3
│       ├── Chammak Challo.mp3
│       ├── Falak Tak.mp3
│       ├── Ishq Wala Love.mp3
│       ├── cover.jpeg
│       └── info.json
├── spotify-css
│   ├── spotify.css
│   └── utility.css
├── spotify-html
│   └── spotify.html
├── spotify-img
│   ├── card-1.jpeg
│   ├── card-2.jpeg
│   ├── card-3.jpeg
│   ├── card-4.jpeg
│   ├── card-5.jpeg
│   ├── close.png
│   ├── home.png
│   ├── hover_play.svg
│   ├── library.svg
│   ├── logo.svg
│   ├── more.png
│   ├── music-icon.png
│   ├── next.png
│   ├── notification.svg
│   ├── pause.png
│   ├── previous.png
│   ├── search.svg
│   └── volume-up.png
└── spotify-js
    └── spotify.js
```

 🚀 Usage Guide
- Click on an album to display its songs.
- Click on a song to play it.
- Use the play/pause button to toggle playback.
- Drag the seek bar to jump to different parts of the song.
- Adjust the volume using the slider.

 🛠️ Known Issues & Improvements

If album cards and songs are not getting displayed:

1. Visit localhost:port/songs/

2. Copy this URL and update the url variable in spotify.js

3. This should fix the issue.

 📜 License
This project is open-source under the [MIT License](LICENSE).

