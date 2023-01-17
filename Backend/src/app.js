//dependencies
const express = require("express");
const server = express();
const {join} = require("path");
const method = require('method-override')
const session = require('express-session')
const cookie = require('cookie-parser')
const cors = require('cors')
server.use(cors())

//server
const port = process.env.PORT || 3030;
const start = () => (console.log(`Starting server => http://localhost:${port}`));
server.listen(port, start());

//ejs
server.set("views", join(__dirname, "./views"));
server.set("view engine", "ejs");

//statics
const {static} = require("express");
server.use(static(join(__dirname, "../public")));

//method override
server.use(method('m'))

server.use(express.urlencoded({extended:true}));

//session
server.use(session({
    secret:'proyecto-oxigeno',
    resave:false,
    saveUninitialized:false,
}))
server.use(cookie());


//api

server.use("/api", require('./routes/products.api.routes'));
server.use("/api", require('./routes/users.api.routes'))

server.use(express.json())