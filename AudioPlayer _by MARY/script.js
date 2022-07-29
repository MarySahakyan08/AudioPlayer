var data={
    title:[
        "Jranerk_Imn es",
        "Malena- Qami Qami",
        "Sargis Yeghiazaryan - Quyrs",
        "Lav Eli-Yes Dzez Pes Chem ",
        "Sargis Avetisyan _ Gor Yepremyan - Mam",
   

    ],

    song:[ 
        
        "music/Jranerk_Imn es.mp3",
        "music/Qami.mp3",
        "music/Sargis Yeghiazaryan - Quyrs.mp3",
        "music/Lav Eli - Yes Dzez Pes Chem.mp3",
        "music/Sargis Avetisyan _ Gor Yepremyan - Mam.mp3",
  
    ],

    poster :[
        // "https://c.tenor.com/7aA4eM7Cg4kAAAAC/music-guitars.gif",
        "https://i.pinimg.com/originals/26/40/60/264060604108f14b3cd172d0c25bbfd3.gif",
        "https://i.gifer.com/fyCe.gif",
        "https://i.gifer.com/DO0.gif",
        "https://i.gifer.com/7TCP.gif",
        // "https://www.funimada.com/assets/images/cards/big/mothers-day-12.gif",
        
       "https://cutewallpaper.org/25/animated-wallpaper-gif-music/musica-musical-gif-find-on-gifer.gif"
      
    ]
}

var song= new Audio();

window.onload = function(){
    playSong()

}

var currentSong=0

function playSong(){
    song.src=data.song[currentSong];
    let songTitle=document.getElementById("songTitle");
    songTitle.textContent= data.title[currentSong];
   
    let img=document.getElementById("row1");
    img.style.backgroundImage="url(" +data.poster[currentSong]+ ")";
   
    let main=document.getElementById("main");
    main.style.backgroundImage="url(" +data.poster[currentSong]+ ")";
    song.play();
}

function playOrPauseSong(){
    let play=document.getElementById("play")
    
    if(song.paused){
        song.play();
        play.src="images/pause.png" // pause
    }
    else{
        song.pause();
        play.src="images/play-button-arrowhead.png" //play
    }
}


song.addEventListener("timeupdate", function(){

    let fill=document.getElementById("fill")

    let position= song.currentTime/ song.duration;
    fill.style.width=position * 100 + "%"; //fill

    convertTime(song.currentTime) //cur. time

    if(song.ended){
        next()
    }
})

function convertTime(seconds){
let currentTime = document.getElementById("currentTime");
let min=Math.floor(seconds/60);
let sec=Math.floor(seconds % 60);

min=(min<10)? "0" + min: min;
sec=(sec<10)? "0" + sec: sec;


currentTime.textContent = min + ":" +sec;
totalTime(Math.round(song.duration))

}

function totalTime(seconds){
    var min=Math.floor(seconds/60)
    var sec=Math.floor(seconds%60)
    min=(min<10)? "0" + min:min;
    sec=(sec<10)? "0" + sec:sec;

    if(isNaN(min)||isNaN(sec) ){
        return false
       }
       else{
        currentTime.textContent+="/" + min +":" + sec
       }
       
  
}; 

function next(){
    currentSong++;
    if (currentSong>=data.song.length) {
        currentSong=0
    } 
    playSong();
    play.src="images/pause.png"
}

function pre(){
    currentSong--;
    if ( currentSong<0) {
        currentSong=data.song.length-1;
    } 
    playSong();
    play.src="images/pause.png"
}

function mute(){
  var mute =document.getElementById("mute")
 if(song.muted){
     song.muted=false
     mute.src="images/volume.png"
}
else{
    song.muted=true
    mute.src="images/volume-mute.png"

}

}

function decrease(){
    song.volume-= 0.2;
}
function increase(){
    song.volume+= 0.2;
}