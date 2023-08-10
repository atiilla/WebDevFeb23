// https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');
const express = require('express')
const app = express()
// load html
// const html = cheerio.load("<h1>hello world</h1>")

app.get('/', (req, res) => {
    fetch("https://github.com/trending")
    .then(res => res.text())
    .then(html => {
        let $ = cheerio.load(html)
        let repos = []
        $('h2.lh-condensed').each((i, el) => {
            let element = $(el);
            //console.log(element.children('a').attr('href').trim())
            let repo_link = `https://github.com${element.children('a').attr('href').trim()}`;
            let repo_title = element.children('a').children('span').text().trim();
            let repo_desc = element.siblings('p.col-9').text().trim()
            repos.push({
                repo_link,
                repo_title,
                repo_desc
            })
        })

        res.json(repos)
    })

})


app.listen(4000,()=>{console.log('server is up')})