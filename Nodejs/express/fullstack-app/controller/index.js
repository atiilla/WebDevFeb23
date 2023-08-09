const Url = require('../model/urlSchema')
const generate6CharsUniqueString = require('../utils')
const path = require('path')

module.exports = {
    home:(req, res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'))
    },
    shorten:(req, res) => {
        const originalUrl = req.body.originalUrl
        const shortcode = generate6CharsUniqueString()
        const shortenUrl = `http://localhost:8000/${shortcode}`
    
        const url = new Url({
            urlCode: shortcode,
            longUrl: originalUrl,
            shortUrl: shortenUrl,
            remoteAddress: req.connection.remoteAddress,
            date: new Date()
        })
    
        url.save()
        .then(result=>{
            res.json(result)
        })
        .catch(err=>{
            res.json({
                error:err
            })
        })
    
    },
    shortCode:(req,res)=>{
        const shortcode = req.params.shortcode
        Url.findOne({
            urlCode:shortcode
        })
        .then(result=>{
            res.redirect(result.longUrl)
        })
        .catch(()=>{
            res.json({
                error:'Url not found'
            })
        })
    }
}