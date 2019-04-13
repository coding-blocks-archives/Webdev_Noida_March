var app = require('./main');
var a = 0;
var b = 2;

var c = a + b;
console.log(c);

function app(){
    return 7;
}

this.a = 7;
this.b = 4;

console.log(a);

module.exports = {
    Nfruit: a,
    Pfruit: b
}



// console.log('a starting');
// exports.done = false;
// const b = require('./b.js');
// console.log('in a, b.done = %j', b.done);
// exports.done = true;
// console.log('a done');