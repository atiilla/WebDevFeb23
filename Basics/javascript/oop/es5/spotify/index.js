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
    let random = Math.floor(Math.random() * this.songs.length) // shuffle 
    this.isPlaying ? console.log(`${this.songs[random].name} - ${this.songs[random].artist} is playing now...`) // pass a random number and extract a song object
        :
        console.log(`${this.songs[random].name} - ${this.songs[random].artist} is paused...`)
    // if(this.isPlaying){
    //     this.paused = false
    //     this.currentPlaying = this.songs[random].name
    //     console.log(`${currentPlaying} is playing...`)
    // }

}

// Pause player
Spotify.prototype.pause = function () {
    return this.isPlaying = false;
}

// Play player
Spotify.prototype.play = function () {
    return this.isPlaying = true
}

Spotify.prototype.findSongByName = function (songName) {
    let song = this.songs.filter(x => x.name.includes(songName))
    console.log(song)
}

Spotify.prototype.nextSong = function () {
    console.log(`${this.songs[this.currentSong].name} - ${this.songs[this.currentSong].artist} is playing now...`)
    let SizeOfSongs = this.songs.length-1

    this.addDelay(Number(this.songs[this.currentSong].duration) * 1000)

    if(SizeOfSongs === this.currentSong){
        this.currentSong =0;
    }else{
        this.currentSong++
    }

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
app.nextSong()
app.nextSong();
app.nextSong();
app.nextSong();
app.nextSong();
app.nextSong();
app.nextSong();
app.nextSong();
app.nextSong();
app.nextSong();