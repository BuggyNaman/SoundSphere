
let currSong = new Audio();
let playBtn = document.querySelector(".play")
let playImg = playBtn.querySelector(".play-img");
let cSong;
let url = "http://127.0.0.1:5501/songs/"

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`
}

function playMusic(folder, track, pause = false) {
  currSong.src = `../songs/${folder}/${track}`;
  cSong = currSong.src;
  highlight(track);
  if (!pause) {
    currSong.play();
    playImg.src = "../spotify-img/pause.png"
  }

  let songTitle = document.querySelector(".song-name");
  songTitle.innerHTML = `<h4>${track.replace(".mp3", "")}</h4>`

}

async function getAlbums() {
  let albums = []
  let data = await fetch(url);
  let response = await data.text();
  console.log(response);

  let divEl = document.createElement("div");
  divEl.innerHTML = response;
  let albumNames = divEl.getElementsByTagName("a");

  for (let i = 0; i < albumNames.length; i++) {
    const element = albumNames[i];
    if (element.href.includes("/songs/")) {
      albums.push(element.href.split("/songs/")[1].replaceAll("%20", " "));
    }
  }
  return albums;
}

async function getSongs(folder) {

  let songs = [];
  let songData = await fetch(`${url}${folder}`);
  let songResponse = await songData.text();

  let divEl2 = document.createElement("div");
  divEl2.innerHTML = songResponse;
  let songNames = divEl2.getElementsByTagName("a");


  for (let i = 0; i < songNames.length; i++) {
    const element = songNames[i];
    if (element.href.endsWith(".mp3")) {
      songs.push((element.href.split(`/${folder.replaceAll(" ", "%20")}/`)[1]).replaceAll("%20", " ").replaceAll("%2C", " ").replaceAll("%26", " "));
    }
  }

  let songUL = document.querySelector(".song-list-ul");
  songUL.innerHTML = "";
  for (let i = 0; i < songs.length; i++) {
    songUL.innerHTML = songUL.innerHTML + `<li data-song="${songs[i]}" class="cursor tracks"> 
            <div class="song">
              <img id="music-icon"src="../spotify-img/music-icon.png" alt="">
              <span>${songs[i].replace(".mp3", "")}</span>
            </div>
           
            <div class="play-btn">
              <img class="invert" src="../spotify-img/hover_play.svg" alt="">
            </div>
          </li>`
  }
  return songs;
}


async function displayAlbums(albums) {

  let cardContainer = document.querySelector(".card-container");

  cardContainer.innerHTML = "";
  for (let i = 0; i < albums.length; i++) {
    let a = await fetch(`${url}${albums[i]}/info.json`)
    let responsJson = await a.json();

    cardContainer.innerHTML += `<div data-folder = "${albums[i]}" class="cards">
          <div class="album-img">
            <div class="cursor hover-play">
              <img src="../spotify-img/hover_play.svg" alt="">
            </div>
            <img src="../songs/${albums[i]}/cover.jpeg" alt="">
          </div>
          <div class="album-title">
            ${responsJson.title}
          </div>
          <div class="card-desc">
            ${responsJson.description}
          </div>
        </div>  `
  }
}

function highlight(songHighlight) {
  let songUL = document.querySelector(".song-list-ul");
  let songLIs = songUL.querySelectorAll(".tracks");

  for (let i = 0; i < songLIs.length; i++) {
    if (songLIs[i].dataset.song === songHighlight) {
      songLIs[i].setAttribute("id", "highlight");
    }
    else {
      songLIs[i].removeAttribute("id");
    }
  }
}

async function main() {
  let albumList = await getAlbums();
  let currAlbum = albumList[0];

  let songs = await getSongs(albumList[0]);

  playMusic(albumList[0], songs[0], true);

  await displayAlbums(albumList);

  document.querySelector(".card-container").addEventListener("click", async e => {
    let cardEL = e.target.closest(".cards");
    currAlbum = cardEL.dataset.folder;
    songs = await getSongs(`${currAlbum}`)
    highlight(songs[0])
    playMusic(currAlbum, songs[0]);
  });

  playBtn.addEventListener("click", () => {
    if (currSong.paused) {
      currSong.play();
      playImg.src = "../spotify-img/pause.png"
    }
    else {
      currSong.pause();
      playImg.src = "../spotify-img/hover_play.svg"
    }
  });

  document.querySelector(".song-list-ul").addEventListener("click", e => {
    let track = e.target.closest(".tracks");
    let trackName = track.querySelector("span").innerHTML;
    trackName += ".mp3";
    highlight(trackName);
    playMusic(currAlbum, trackName);
  })

  let currTime = document.querySelector(".curr-time");

  let totalDuration = document.querySelector(".total-time");

  currSong.addEventListener("timeupdate", () => {
    currTime.innerHTML = `${secondsToMinutesSeconds(currSong.currentTime)}`
    totalDuration.innerHTML = `${secondsToMinutesSeconds(currSong.duration)}`

    document.querySelector(".circle").style.left = (currSong.currentTime / currSong.duration) * 100 + `%`;
  });

  document.querySelector(".seek").addEventListener("click", e => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;

    document.querySelector(".circle").style.left = percent + "%";
    currSong.currentTime = ((currSong.duration) * percent) / 100;
  });

  document.querySelector(".hamburger").addEventListener("click", () => {
    let leftEl = document.querySelector(".left");
    if (leftEl.classList.contains("out")) {
      leftEl.setAttribute("class", "in left");
    }
    else {
      leftEl.setAttribute("class", "out left");
    }
  })

  let searchInput = document.querySelector("input")
  searchInput.addEventListener("focus", () => {
    document.querySelector(".search-icon").style.display = "none";
  });
  searchInput.addEventListener("blur", () => {
    if (searchInput.value.trim() === "") {
      document.querySelector(".search-icon").style.display = "block";
    }
  });


  let prev = document.querySelector(".prev");
  prev.addEventListener("click", () => {
    let index = songs.indexOf((cSong.split(`/${currAlbum.replaceAll(" ", "%20")}/`)[1]).replaceAll("%20", " "));
    if (index > 0) {
      playMusic(currAlbum, songs[index - 1]);
    }
    else {
      playMusic(currAlbum, songs[songs.length - 1]);
    }
  });

  let next = document.querySelector(".next");
  next.addEventListener("click", () => {
    let index = songs.indexOf((cSong.split(`/${currAlbum.replaceAll(" ", "%20")}/`)[1]).replaceAll("%20", " "));
    if (index < (songs.length - 1)) {
      playMusic(currAlbum, songs[index + 1]);
    }
    else {
      playMusic(currAlbum, songs[0]);
    }
  });

  document.body.addEventListener("keydown", event => {
    switch (event.code) {
      case "Space":
        if (currSong.paused) {
          currSong.play();
          playImg.src = "../spotify-img/pause.png"
        }
        else {
          currSong.pause();
          playImg.src = "../spotify-img/hover_play.svg"
        }
        break;
      case "ArrowRight":
        index = songs.indexOf((cSong.split(`/${currAlbum.replaceAll(" ", "%20")}/`)[1]).replaceAll("%20", " "));
        if (index < (songs.length - 1)) {
          playMusic(currAlbum, songs[index + 1]);
        }
        else {
          playMusic(currAlbum, songs[0]);
        }
        break;
      case "ArrowLeft":
        index = songs.indexOf((cSong.split(`/${currAlbum.replaceAll(" ", "%20")}/`)[1]).replaceAll("%20", " "));
        if (index > 0) {
          playMusic(currAlbum, songs[index - 1]);
        }
        else {
          playMusic(currAlbum, songs[songs.length - 1]);
        }
        break;
    }

    if (event.key.toLowerCase() === "m") {
      let leftEl = document.querySelector(".left");
      if (leftEl.classList.contains("out")) {
        leftEl.setAttribute("class", "in left");
      }
      else {
        leftEl.setAttribute("class", "out left");
      }
    }
  });

  document.querySelector(".volume>input").addEventListener("change", e => {
    currSong.volume = e.target.value / 100;
  })

  currSong.addEventListener("ended", () => {
    let index = songs.indexOf((cSong.split(`/${currAlbum.replaceAll(" ", "%20")}/`)[1]).replaceAll("%20", " "));
    if (index < (songs.length - 1)) {
      playMusic(currAlbum, songs[index + 1]);
    }
    else {
      playMusic(currAlbum, songs[0]);
    }
  });
}

main();

