const express = require('express');
const app = express();

require('dotenv').config() // loads data from .env file

const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(express.urlencoded({
    extended: true
}))

const path = require('path');
const public_dir = path.join(__dirname,'public');
app.use(express.static(public_dir));


// CSS? Tailwind

const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

const router = require('./routes/danceAppRoutes');
app.use('/', router);

app.listen(process.env.PORT ||3000, () => {
    console.log('Server started. Ctrl^c to quit.\n http://localhost:3000');
})