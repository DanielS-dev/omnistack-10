const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://DanielSilva:y1xHJ6NhjF66g63v@cluster0-sw6xn.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use( express.json() );
app.use( express.urlencoded({ extended: true}) );

app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');

    next();
})

app.use(routes);

app.listen(3333);