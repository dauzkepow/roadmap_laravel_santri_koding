//File Control Utama

const express = require('express') //import express
const cors = require('cors') //import cors
const bodyParser = require('body-parser') //import bodyParser

const app = express() //inisialisasi app
app.use(cors()) //inisialisasi cors akses app lain
app.use(bodyParser.urlencoded({ extended: false })) //inisialisasi bodyParser post http
app.use(bodyParser.json()) //parse application/json
const port = 3000; //port jalankan express
const router = require('./routes') //import file router


//route
app.get('/', (req, res) => {
    res.send('Hello World')
})

//definisikan routes, basePath endpoint /api di depannya
app.use('/api', router);

//start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})