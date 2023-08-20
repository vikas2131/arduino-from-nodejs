const PORT = process.env.PORT || 3004; // Defining the PORT we used for communication server
const INDEX =  '/index.html' // Page for the website
const express = require('express') // Node.js Application Framework


console.log('hi');



const app2 = express()
    .get('/', (req,res) =>{
    res.sendFile(INDEX, {root : __dirname})}) //Basic Routing when website hit '/', respond serve index.html
    .listen(PORT, ()=> console.log(`Listening on ${PORT}`))

var io2 = require('socket.io')(app2);

io2.on('connection', function(socket) {
    
    socket.on('lights',function(data){
        
        console.log( data );
        
    
    });
    
});


