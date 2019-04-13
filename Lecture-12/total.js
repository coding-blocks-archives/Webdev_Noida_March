var km = require('./km');
var time = require('./time');
var input = process.argv;
var kval = input[2];
var tval = input[3];

function total(k, t){
    
    return km.price(k) + time.price(t);
}

console.log(total(kval, tval));