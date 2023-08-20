const PORT = process.env.PORT || 3004; // Defining the PORT we used for communication server
const INDEX =  '/index.html' // Page for the website
const express = require('express') // Node.js Application Framework
var http = require('http');
var fs = require('fs');
var index = fs.readFileSync( 'index.html');
const io = require("socket.io")(3000, {
    cors:{
        origin: ["http://localhost:3002"],
    },
});

io.on("connection", socket => {
    console.log(socket.id)
})

const app2 = express()
    .get('/', (req,res) =>{
    res.sendFile(INDEX, {root : __dirname})}) //Basic Routing when website hit '/', respond serve index.html
    .listen(PORT, ()=> console.log(`Listening on ${PORT}`))

var io2 = require('socket.io')(app2);

io2.on('connection', function(socket) {
    
    socket.on('lights',function(data){
        
        console.log( data );
        
        io.emit('lights', data);
    
    });
    
});


