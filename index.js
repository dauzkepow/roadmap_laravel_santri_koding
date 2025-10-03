const express = require("express");
const app = express();
const port = 3000;

//import body parser
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//import library CORS
const cors = require('cors')

//use cors
app.use(cors())


//route dengan method get
app.get("/", (req, res) => {
  res.send("Hello World!");
});


//import file router /routes/posts.js
const postsRouter = require('./routes/posts.js'); //import route posts
app.use('/api/posts/', postsRouter); //use untuk config set-prefix URL endpoint API, file router

//listen port express
app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
