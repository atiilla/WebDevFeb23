const http = require('http')

http.createServer(function (request, response) {
    // console.log(request.headers.referer?request.headers.referer:null)
    // console.log(new URL(request.url, `http://${request.headers.host}`).searchParams.get('name'))
    // response.setHeader('Content-Type','text/html')
    // response.write
    let clientName = new URL(request.url, `http://${request.headers.host}`).searchParams.get('name');

    // response.write(`\nWelcome ${clientName}`)
    // // http://localhost:3005/?firstname=Mike&lastname=Joe&age=25&
    // response.end()

    // xss-filter Cross site scripting
    // http://localhost:3005/?name=Greg"><script>window.location.href="https://youtube.com"</script>
    const body = `\nWelcome ${clientName}`
    response
        .writeHead(200, {
            'Content-Length': Buffer.byteLength(body),
            'Content-Type': 'text/plain',
        })
        .end(body);
}).listen(3005, () => {
    console.log('Web server has started')
})