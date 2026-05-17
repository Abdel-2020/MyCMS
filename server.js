require('dotenv').config();
const express = require ('express');
const http = require('http');
const port = process.env.PORT || 4000;
const app = express();

//Router
const blogRouter = require('./api/routes/routes.js');

//DB connection
const db = require('./db/connect.js');

//Middleware
app.use(express.json());
app.use(express.static('./public'))

//Routes
app.use('/api/v1/blog', blogRouter)

app.listen(port, () => {
    db.connect();
    console.log( `server listening on port ${port}... `)
})
