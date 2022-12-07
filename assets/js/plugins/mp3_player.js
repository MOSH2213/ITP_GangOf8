
const img = document.querySelector("#img");
const playPause = document.querySelector("#playpause");
const playPauseBtn = document.querySelector("#playpause-btn");
const audio = document.querySelector("#audio");
const title = document.querySelector("#title");
const prevBtn = document.querySelector("#prevbtn");
const nextBtn = document.querySelector("#nextbtn");
const progress = document.querySelector("#progress");
const progressBar = document.querySelector(".progress-bar");
const volume = document.querySelector("#volume");
const layer = document.querySelector(".layer");
const volBar = document.querySelector(".bar");
const progressLine = document.querySelector(".progress-line");
const volumeRange = document.querySelector(".volumerange");
const repeatBtn = document.querySelector("#repeat");
const likeBtn = document.querySelector("#like");
const likeIcon = document.querySelector("#likeicon");
const songListBtn = document.querySelector("#list");
const songList = document.querySelector("#songs-list");
const listCloseBtn = document.querySelector("#listclose");
// songs array

const songs = [
  {
    path: 'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/1.mp3',
    displayName: 'Yıldız Tozu',
    artist: 'Ozbi',
    cover: "https://images.genius.com/ee202c6f724ffd4cf61bd01a205eeb47.1000x1000x1.jpg",
  },
  {
    path: 'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/2.mp3',
    displayName: 'You\'re Somebody Else',
    artist: 'flora cash',
    cover: "https://pbs.twimg.com/media/D2NZH-2U4AAL9Xs.jpg",
  },
  {
    path: 'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/3.mp3',
    displayName: 'Powerless',
    artist: 'Linkin Park',
    cover: "https://images.genius.com/c5a58cdaab9f3199214f0e3c26abbd0e.1000x1000x1.jpg",
  },
  {
    path: 'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/4.mp3',
    displayName: 'Seni Dert Etmeler',
    artist: 'Madrigal',
    cover: "https://www.radyomega.fm/wp-content/uploads/2020/04/MADRIGAL-600.jpg",
  },
  {
    path: 'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/5.mp3',
    displayName: 'Ederlezi',
    artist: 'Solomun',
    cover: "https://m.media-amazon.com/images/I/616t0841uvL._SS500_.jpg",
  },
  {
    path: 'https://raw.githubusercontent.com/saranshbhardwaj1999/audio/main/Justin_Bieber_Anyone.mp3',
    displayName: 'Anyone',
    artist: 'Justin Bieber',
    cover: "http://universalmusic.at/website2016/wp-content/uploads/2021/01/jb_anyone-single-cover_hr-1024x1024.jpg",
  },
  {
    path: 'https://raw.githubusercontent.com/saranshbhardwaj1999/audio/main/Justin_Bieber_Hold_On.mp3',
    displayName: 'Hold On',
    artist: 'Justin Bieber',
    cover: "https://www.36vibes.com.ng/wp-content/uploads/2021/03/Justin-bieber-hold-on.jpg",
  },
  {
    path: 'https://raw.githubusercontent.com/saranshbhardwaj1999/audio/main/Jon_Bellion_All_Time_Low.mp3',
    displayName: 'All Time Low',
    artist: 'Jon Bellion',
    cover: "https://www.teahub.io/photos/full/251-2512846_all-time-low-jon-bellion-album-art.jpg",
  },
];

// deafult song index 

let songIndex = 2;

// song default state

let isPlaying = false;

// song pause function

function playSong(){
  isPlaying = true;
  playPauseBtn.classList.replace("ni-button-play","ni-button-pause");
  audio.play();
}

// song play function

function pauseSong(){
  isPlaying = false;
  playPauseBtn.classList.replace("ni-button-pause","ni-button-play");
  audio.pause();
}

// loading songs

function loadSong(song){
    img.src = song.cover;
    title.textContent = song.displayName;
    audio.src = song.path;
};

// previous song 

function prevSong(){
  songIndex--;
  if(songIndex < 0){
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// next song

function nextSong(){
  songIndex++;
  if(songIndex > songs.length-1){
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// progress bar function
console.log(audio.duration);

function updateProgress(e){
    if (isPlaying) {
    const { duration, currentTime } = e.target;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.value = progressPercent;
    if(progressPercent==100){
      return nextSong();
    }
  }
}

function progressSlide(e){
  const { value } = e.target;
  const progressTime = Math.ceil((audio.duration / 100) * value);
  audio.currentTime = progressTime;
  console.log(progressTime);
    if(!isPlaying) {
      progressLine.style.width = `${value}%`;    
   }
}


function setVolume(){
    audio.volume = volumeRange.value;
    console.log("dssa"+audio.volume);
}

function repeat() {
  repeatBtn.style.color = "red";
  const repeatBtnState = repeatBtn.style.color;
  if(repeatBtnState =="red"){
    audio.loop = true;
    loadSong();
  }else{
    audio.loop = false;
    loadSong();
  }
  
}

function like() {
    // likeIcon
  if (likeIcon.style.color=="#67748E") {
      likeIcon.style.color == "red";
  } else {
      likeIcon.style.color == "#67748E";
  }
}

function musicList(){
  songList.classList.toggle("showlist");
  listCloseBtn.addEventListener("click",()=>{
    songList.classList.remove("showlist");
  })
}


playPause.addEventListener("click", () => (isPlaying ? pauseSong() : playSong())); 
prevBtn.addEventListener("click",prevSong);
nextBtn.addEventListener("click",nextSong);
audio.addEventListener("timeupdate", updateProgress);
progress.addEventListener("input", progressSlide);
// volume.addEventListener("click", volumeBar);
volumeRange.addEventListener("input",setVolume);
repeatBtn.addEventListener("click", repeat);
likeIcon.addEventListener("click", like);
songListBtn.addEventListener("click",musicList);