const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const fetch = require('node-fetch')
client.once('ready',()=>{
    console.log('Bot is online')
})

async function GetJoke(){
    let res = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
    let data = res.json()
    return data
}

let prefix="!joke"

client.on('messageCreate',(message)=>{
    console.log(message.content)
    if(message.content.startsWith(prefix)){
        GetJoke()
        .then(joke=>{
            message.channel.send(joke.joke)
        })
    }
})


client.login('tokennn');
