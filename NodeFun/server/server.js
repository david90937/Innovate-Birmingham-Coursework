const path = require('path');
const fs = require('fs');

let dataPath = path.join(__dirname, '../data.json');

let chirpArray = [
    {
        name: 'Alex',
        message: 'Yo, sup?'
    },
    {
        name: 'Polly',
        message: 'nm'
    },
    {
        name: 'Alex',
        message: 'SW?'
    },
    {
        name: 'Polly',
        message: 'Sure. Siege?'
    },
    {
        name: 'Alex',
        message: 'Working on it now'
    }
]

chirpArray.forEach(chirp => {
    fs.appendFileSync(dataPath, chirp.name + '\n' + chirp.message + '\n')
})

fs.readFile(dataPath, {
    encoding: "UTF-8"
},(err, data) => {
    if (err) console.log(err)
    let chirps = data;
    console.log(chirps)
})