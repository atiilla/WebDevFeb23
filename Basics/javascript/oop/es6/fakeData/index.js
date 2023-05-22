const { faker } = require('@faker-js/faker');
/*
step1: npm init -y
step2: npm install @faker-js/faker
step3: const { faker } = require('@faker-js/faker');
*/

class FakePersonGenerator {
    constructor() {
        this.users = [],
            this.wordlist = [
                "Thunder",
                "Lightning",
                "Hurricane",
                "Storm",
                "Blaze",
                "Flames",
                "Inferno",
                "Firebirds",
                "Phoenix",
                "Dragons",
                "Spartans",
                "Warriors",
                "Gladiators",
                "Vikings",
                "Ninjas",
                "Samurais",
                "Cobras",
                "Rattlesnakes",
                "Jaguars",
                "Tigers",
                "Panthers",
                "Lions",
                "Bears",
                "Wolves",
                "Foxes",
                "Hawks",
                "Eagles",
                "Falcons",
                "Ospreys",
                "Owls",
                "Ravens",
                "Crows",
                "Swans",
                "Dolphins",
                "Sharks",
                "Pirates",
                "Mariners",
                "Admirals",
                "Captains",
                "Musketeers",
                "Gunslingers",
                "Outlaws",
                "Bandits",
                "Pioneers",
                "Explorers",
                "Trailblazers",
                "Mountaineers",
                "Riders",
                "Marauders",
                "Corsairs",
                "Privateers",
                "Conquistadors",
                "Crusaders",
                "Knights",
                "Paladins",
                "Minotaurs",
                "Centurions",
                "Colossi",
                "Titans",
                "Monarchs",
                "Dynasty",
                "Empire",
                "Kingdom",
                "Legends",
                "Mythics",
                "Phantoms",
                "Spirits",
                "Rebels",
                "Revolution",
                "Glory",
                "Victory",
                "Champions",
                "Royals",
                "Emperors",
                "Magicians",
                "Wizards",
                "Warlocks",
                "Enchanters",
                "Necromancers",
                "Arcanists",
                "Alchemists",
                "Outlanders",
                "Nomads",
                "Survivors",
                "Saviors",
                "Guardians",
                "Defenders",
                "Sentinels",
                "Wardens",
                "Crusaders",
                "Avengers",
                "Justice",
                "Vengeance",
                "Fury",
                "Rage",
                "Wrath",
                "Valor"
            ];

    }

    generator() {
        const obj = {
            username: faker.internet.userName(),
            password: faker.internet.password(),
            email: faker.internet.email(),
            fullname: faker.person.fullName(),
            address: {
                fulladdress: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}, ${faker.location.zipCode()}`,
                geolocation: {
                    lat: faker.location.latitude(),
                    lng: faker.location.longitude()
                }
            },
            profession: {
                jobtitle: faker.person.jobTitle(),
                jobdesc: faker.person.jobDescriptor(),
                jobArea: faker.person.jobArea()
            },
            mobile: faker.phone.number("+32 4## ## ## ##"),
            iban: faker.finance.iban(),
            btcWallet: faker.finance.bitcoinAddress(),
            sportClub: this.getRandomSportClubName()
        }
        // console.log(obj)
        return obj
    }

    getRandomSportClubName(){
        let keyword1 = Math.floor(Math.random()*this.wordlist.length)
        let keyword2 = Math.floor(Math.random()*this.wordlist.length)
        return `${this.wordlist[keyword1]} ${this.wordlist[keyword2]} Club`
    }

    generateMoreData(size,callback){
        let users = []
        for(let i=0;i<size;i++){
            console.log(callback())
        }
    }
}

let app = new FakePersonGenerator()
app.generateMoreData(10,app.generator.bind(app))
// console.log(app.users)
// console.log(app.getRandomSportClubName())
