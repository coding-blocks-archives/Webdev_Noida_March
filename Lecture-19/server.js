const express = require('express');
const app = express();
const http = require('http');

const server = http.Server(app);
const socket = require('socket.io');
const io = socket(server);

app.use('/', express.static('public'));

io.on('connection', (s)=>{
    s.on('message', (data)=>{
       io.emit('nameUser', {d: data})
    })
    console.log(s.id);
    console.log('connection established');
})

server.listen(5000, ()=>{
   console.log('Listening at port 5000');
});