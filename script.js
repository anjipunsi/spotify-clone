console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
        { songName: "Let me love you", filepath: "songs/1.mp3", coverPath: "covers/1.jpg" },
        { songName: "Akhiyan", filepath: "songs/2.mp3", coverPath: "covers/2.jpg" },
        { songName: "Ek tarfa", filepath: "songs/3.mp3", coverPath: "covers/3.jpg" },
        { songName: "Ishq zaade", filepath: "songs/4.mp3", coverPath: "covers/4.jpg" },
        { songName: "mehbooba-mehbooba", filepath: "songs/5.mp3", coverPath: "covers/5.jpg" },
        { songName: "Teri aankhon mein", filepath: "songs/6.mp3", coverPath: "covers/6.jpg" },
        { songName: "Teri kasam", filepath: "songs/7.mp3", coverPath: "covers/7.jpg" },
        { songName: "Mere zindagi k malik", filepath: "songs/8.mp3", coverPath: "covers/8.jpg" },
        { songName: "Bappa morya", filepath: "songs/9.mp3", coverPath: "covers/9.jpg" },
        { songName: "Love you zindagi", filepath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

songItems.forEach((element, i)=>{
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

// audioElement


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
                if (audioElement.paused || audioElement.currentTime <= 0) {
                        audioElement.play();
                        masterPlay.classList.remove('fa-pause-circle');
                        masterPlay.classList.add('fa-play-circle');
                        gif.style.opacity = 1;
                }
                else {
                        audioElement.pause();
                        masterPlay.classList.remove('fa-play-circle');
                        masterPlay.classList.add('fa-pause-circle');
                        gif.style.opacity = 1;
                }
})

        // Listen to Events
audioElement.addEventListener('timeupdate', () => {
                //Update Seekbar
                progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
                myProgressbar.value = progress;
 })

myProgressbar.addEventListener('change', () => {
                audioElement.currentTime = myProgressbar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

        })

}
//console.log(songIndex);
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
     })
})
document.getElementById('next').addEventListener('click', ()=>{
      if(songIndex>=10){
        songIndex = 0
      }
      else{
        songIndex += 1;
      }
      audioElement.src = `songs/${songIndex}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
     
})
document.getElementById('previous').addEventListener('click', ()=>{
        if(songIndex<=0){
          songIndex = 0
        }
        else{
          songIndex -= 1;
        }
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
       
  })