const net = require('net');

// pkgmgr /iu:"TelnetClient"

net.createServer(socket=>{
    console.log('Woooo!!! User conntected\n')
    let str = ""
    socket.on('data',(stream)=>{
        
        str+=stream.toString()
        console.log(': ',str)
        process.stdout.write(`user sent a message`)
    })
}).listen(1337,()=>console.log('TCP socket conntected'))

// telnet 192.168.68.213 1337