/*
// play a song
// pause a song
// make a spotify list
// add song into spotify list
// remove song from spotify list
// search a song by any [prop][word]
// next song
// prev song
// repeat playlist
// register_user
// login_user
*/

function Spotify() {
    this.songs = []
    this.users = []
    this.isPlaying = false;
    this.isPaused = false;
    this.currentSong = 0;
    //    this.currentPlaying=""
    //    this.paused=false;
}

// Add a Song 
Spotify.prototype.addSong = function (name, artist, genre, album, lang, duration, year) {
    let obj = {
        name,
        artist,
        genre,
        album,
        lang,
        duration,
        year
    }
    return this.songs.push(obj)
}
// end of add song method

Spotify.prototype.playAny = function () {
    let random = Math.floor(Math.random() * this.songs.length); // shuffle
    if (this.isPlaying === false) {
        this.isPlaying = true;
   
        console.log(`${this.songs[random].name} - ${this.songs[random].artist} is playing now...`)
        this.addDelay(Number(this.songs[random].duration) * 1000)
        this.isPlaying = false;
    }
    // if play called again then continue playing with same song
    
}


// Pause player
Spotify.prototype.pause = function () {
    this.isPaused = true;
    return this.isPlaying = false
}

// Play player
Spotify.prototype.play = function () {
    this.isPlaying = true;
    return this.isPaused = false
}

Spotify.prototype.findSongByName = function (songName) {
    let song = this.songs.filter(x => x.name.includes(songName))
    console.log(song)
}

Spotify.prototype.nextSong = function () {
    console.log(`${this.songs[this.currentSong].name} - ${this.songs[this.currentSong].artist} is playing now...`)
    let SizeOfSongs = this.songs.length - 1

    this.addDelay(Number(this.songs[this.currentSong].duration) * 1000)

    if (SizeOfSongs === this.currentSong) {
        this.currentSong = 0;
    } else {
        this.currentSong++
    }

}

Spotify.prototype.playList = function () {
    // repeat playlist
    // next song

    this.nextSong()
    this.playList()
}

Spotify.prototype.addDelay = function (ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}
let app = new Spotify()



app.addSong('Toxicity', 'SOAD', 'Rock', 'Toxicity', 'EN', '10', '2004');
app.addSong('Byob', 'SOAD', 'Rock', 'Unknown', 'EN', '7', '2005');
app.addSong('My name is', 'Eminem', 'Rap', 'Unknown', 'EN', '5', '2005');
app.addSong('Before I die', '2pac', 'Rap', 'Unknown', 'EN', '2', '2005');
app.addSong('Welcome to the Internet', 'Bo Burnham', 'Rap', 'Unknown', 'EN', '12', '2005');
app.addSong('Upper Cuts', 'Terror Reid', 'Rap', 'Unknown', 'EN', '3', '2005');
app.addSong('Upper Cuts1', 'Terror Reid', 'Rap', 'Unknown', 'EN', '3', '2005');
// app.play();
// app.pause();
// app.playAny()
// app.findSongByName('Upper')
// app.playList()

// Spotify.prototype.addSongIntoUserPlaylist = function(username,songName){
//     let userObj = this.users.find(user=>user.username === username) // single user object
//     let songObj = this.songs.find(song=>song.name ===songName);
//     userObj.playlist.push(songObj)
// }


// app.addSongIntoUserPlaylist('atilla','Byob')
