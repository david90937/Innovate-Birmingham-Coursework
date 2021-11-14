const express = require('express');
const path = require('path');

let app = express();

// app.get('/', (req, res) => {
//     res.send('Hello from the web server side...')
// })

app.use((req, res, next) => {
    console.log(req.originalUrl)
    next();
})

app.get('/order/:id', (req, res) => {
    let id = req.params.id;
    res.send(id);
})

app.use(express.static(path.join(__dirname, '../public')))

app.listen(3000);