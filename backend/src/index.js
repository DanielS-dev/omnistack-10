const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://DanielSilva:cUCNzE5SYjuY2dKS@cluster0-sw6xn.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use( express.json() );
app.use( express.urlencoded({ extended: true}) );
app.use( cors() );

app.use(routes);

app.listen(3333);