
const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

// setup express
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

// template


app.get('/', (request, response) => {
    response.render('index')
})

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})