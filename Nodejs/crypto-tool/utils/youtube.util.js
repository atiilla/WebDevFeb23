const fs = require('fs'); // node core module
const ytdl = require('ytdl-core');

module.exports={
    download:function(video_url,filename){
        ytdl(video_url)
        .pipe(fs.createWriteStream(filename+'.mp4'));

        console.log('Video is saved')
    }
}