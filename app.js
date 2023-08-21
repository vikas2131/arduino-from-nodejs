const PORT = process.env.PORT || 3004; // Defining the PORT we used for communication server
const INDEX =  '/index.html' // Page for the website
const express = require('express') // Node.js Application Framework
const io = require("socket.io")(3000, {
    cors:{
        origin: false,
    },
});

console.log('hi');

io.on("connection", socket => {
    console.log(socket.id)
})

const app2 = express()
    .get('/', (req,res) =>{
    res.sendFile(INDEX, {root : __dirname})}) //Basic Routing when website hit '/', respond serve index.html
    .listen(PORT, ()=> console.log(`Listening on ${PORT}`))

var io2 = require('socket.io')(app2);

io2.on('connect', function(socket) {
    console.log("received successfully-2");
    socket.on('lights',function(data){
        console.log("testing");
        console.log( data );
        
        io2.emit('lights', data);
    
    });
    
});


