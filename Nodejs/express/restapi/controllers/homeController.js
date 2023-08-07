const home = (req, res) => {
    res.send('hello world')
}

const detail = (req, res) => {
    // console.log(req.params)
    const {id} = req.params
    res.send(`<h1>ID is: ${id}</h1>`)
}

module.exports = {
    homeController: home,
    detailController: detail
}