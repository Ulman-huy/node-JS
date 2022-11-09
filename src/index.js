const path = require('path');
const express = require('express');
const morgan = require('morgan');
const engine = require('express-handlebars');

const app = express()

app.use(morgan('combined'))

app.engine('hbs', engine.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000)
