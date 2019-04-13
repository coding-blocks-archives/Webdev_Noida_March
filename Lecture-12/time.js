var val = 0
function price(t){

    if(t<=5) {
        val = 0 * t
    }
    else if(t<=15) {
        val = 0 +  (t-5)*1;
    }
    else {
        val = 0 + 10 + (t - 15) * 2;
    }

    return val;
}

module.exports = {
    price: price
}