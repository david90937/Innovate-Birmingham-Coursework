const path = require('path');
const fs = require('fs');
const request = require('request-promise')

let dataPath = path.join(__dirname, 'data.json')

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) console.log(err)

    fs.writeFile(dataPath, res.body, err => {
        if (err) console.log(err)
    })
    // JSON.parse(body).data.children.forEach(item => {
    //     // console.log(item.data.title)
    //     // fs.appendFileSync(dataPath, item.data.author + '\n' + item.data.title + '\n' + item.data.url + '\n')
    //     // redditArray.push(item.data.title, item.data.author, item.data.url);
    // });
    // redditArray.forEach(article => {
    //     fs.appendFileSync(dataPath, article + '\n')
    // })
})