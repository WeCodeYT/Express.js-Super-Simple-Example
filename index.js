const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Subscribe to WeCode! Hello world! Automatic restart'))

app.get('/home', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))