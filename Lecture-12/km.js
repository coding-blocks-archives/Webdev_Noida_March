var val = 0
function price(km){

    if(km<=5) {
        val = 10*km
    }
    else if(km<=15) {
        val = 50 +  (km-5)*15;
    }
    else {
        val = 50 + 150 + (km - 15) * 20;
    }

    return val;
}

module.exports = {
    price: price
}