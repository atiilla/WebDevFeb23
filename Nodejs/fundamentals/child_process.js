const {exec} = require('child_process');

exec('ls -la').stdout.on('data',result=>{
    console.log(result)
})