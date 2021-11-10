const express = require('express')
const { get } = require('http')

const app = express()
const port = 5555

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    console.log('home route')
    // res.send('<h1>This is the Home Page 👍🏽 </h1>') 
    console.log(__dirname)
    res.sendFile(__dirname + '/views/home-page.html')
})

app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + '/views/about-page.html')
});

app.get('/work', (req, res, next) => {
    res.sendFile(__dirname + '/views/work-page.html')
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})