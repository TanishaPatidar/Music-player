const music=document.querySelector('audio');
const img = document.querySelector("img");
const play= document.getElementById('play');
const title= document.getElementById('title');
const artist= document.getElementById('artist');
const prev= document.getElementById('prev');
const next= document.getElementById('next');

const songs=[
 {
    name:"music-1",
    nameimg:'nature-1',
    title:'PARINDA',
    artist:'Amaal Malik'
},
{
    name:'music-2',
    nameimg:"nature-2",
    title:"Maths Dabba",
    artist:'Rohan Utpat'
},
{
    name:'music-3',
    nameimg:'nature-3',
    title:'Jeete Chal',
    artist:'Pragati Joshi'
},
{
    name:'music-4',
    nameimg:'nature-4',
    title:'Aisa Kyun Maa',
    artist:'Sunidhi Chauhan'
},
];


isPlaying= false;

//for play functionality
const playMusic= ()=>{
    isPlaying=true;
    music.play();

    play.classList.replace('fa-circle-play','fa-circle-pause');
    img.classList.add("anime");

};

//for pause functionality
const pauseMusic = ()=>{
    isPlaying=false;
    music.pause();

    play.classList.replace('fa-circle-pause','fa-circle-play');
    img.classList.remove("anime");

};

play.addEventListener('click', () =>{
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();

    }
});

//changing the music data

const loadSong =(songs) => {
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="music/"+ songs.name + ".mp3";
    //img.src ="images/" + songs.nameimg + ".jpg";
    img.src="images/"+songs.nameimg +".jpg";
};
//loadSong(songs[1]);

songIndex = 0;
const nextSong = ()=>{
    songIndex=(songIndex+1)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () =>{
    songIndex =(songIndex -1 +songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};


//next.addEventListener('click',nextSong);
next.addEventListener('click',nextSong);
//prev.addEventListener('click',prevSong);
prev.addEventListener('click',prevSong);


