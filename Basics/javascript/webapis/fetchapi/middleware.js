module.exports = (req, res, next) => {
    res.header('X-Hello', 'World')
    let token = req.headers['token'];
    console.log(req.headers)
    let accessId = req.headers['access-id'];
    if (token && token === 'developer') {
        if(accessId && accessId=='864'){
            next()
        }else{
            res.status(401).send(`
            <h1>use detective skills</h1>
            // hint
            <h1>access-id: a number between 1-1000</h1>
            `)
        }
    }else{
        res.status(401).send(`
        <h1>use detective skills</h1>
        // hint
        <h1>token: developer</h1>

        `)
    }
    
}