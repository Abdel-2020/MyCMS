require('dotenv').config();
const nunjucks = require('nunjucks');
const express = require ('express');
const http = require('http');
const port = process.env.PORT || 4000;
const app = express();

//Nunjucks
nunjucks.configure('./views/', {
  autoescape: true,
  express: app
});

//Router
const {postRouter, picRouter} = require('./api/routes/routes.js');

//DB connection
const db = require('./db/connect.js');

//Middleware
app.use(express.json());
app.use(express.static('./public'));

//Routes
app.use('/api/v1/blog', postRouter);
app.use('/api/v1/pictures', picRouter);

app.listen(port, () => {
    db.connect();
    console.log( `server listening on port ${port}... `);
});
