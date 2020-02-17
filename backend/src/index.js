const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

/*mongoose.connect('mongodb+srv://DanielSilva:y1xHJ6NhjF66g63v@cluster0-sw6xn.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});*/

app.use( express.json() );
app.use( express.urlencoded({ extended: true}) );

app.use(routes);

app.listen(3333);