/*
Node.js can generate dynamic page content
Node.js can create, open, read, write, delete, and close files on the server
Node.js can collect form data
Node.js can add, delete, modify data in your database
*/

// http 
const http = require('http')

const server = http.createServer(function (request, response) {
    response.writeHead(418, 'teapot',
        {
            'Content-Type': 'text/html',
            'testProp': 'TestValueeeee',
            'User-Agent': 'lol'
        }) // headers

    switch (request.url) {
        case '/':
            response.end('HOMEPAGE')
            break
        case '/intec':
            response.end('ADMIN PAGE')
            break;
        case '/user':
            response.end('<h1>user dashboard</h1>')
            break;
        case '/google':
            // response.end(`<meta http-equiv="refresh" content="5; url=https://google.com">`)
            response.writeHead(301, { Location: "https://google.com" })
            response.end()
            break;
        case '/hidden':

            if (request.headers['user-agent'] === 'atilla') {
                response.write('You know what to do :)))))')
                response.end()
                return;
            }
    }
})
// http://localhost:1377/
server.listen(1377, 'localhost', null, () => console.log("Webserver has started on 1377..."))