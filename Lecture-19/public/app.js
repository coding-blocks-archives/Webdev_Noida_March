var name = prompt('Enter your name')
var socket = io();
var users = [];
var user = document.getElementById('user');

socket.emit('message', {name: name});

socket.on('nameUser', (data)=>{

    users.push(data.d.name);
    display(data.d.name);
    console.log(users);
})


function display(d) {
    var p = document.createElement('p');
    var text = document.createTextNode(`${d} joined`);
    p.append(text);
    user.append(p);
} 