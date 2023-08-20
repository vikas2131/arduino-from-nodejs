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

var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

var io2 = require('socket.io')(app);

io2.on('connection', function(socket) {
    
    socket.on('lights',function(data){
        
        console.log( data );
        
        io.emit('lights', data);
    
    });
    
});

app.listen(3001);
