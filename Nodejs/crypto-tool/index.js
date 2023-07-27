const base64 = require('./utils/base64.util')
const youtube = require('./utils/youtube.util')

console.log(base64.encode('This is super cool'))

console.log(base64.decode('VGhpcyBpcyBzdXBlciBjb29s'))

youtube.download('https://www.youtube.com/watch?v=0DTyB7o_6HU','Dabbla - Psychoville')