var x = 7;
function fruit(){
    var x = 8; 
    function apple(){
        x = 6;
        console.log(this.x);
    }

    apple();
}

fruit();


var edge = {
    device: 'mobile',
    characterstic: 'pixel',
    dev: function(){
        console.log(this) ;
    }
}

var edgeX = {
    device: 'mobile',
    characterstic: 'iPhone'
}

function device(a,b){
    console.log(a);
    console.log(b);
   console.log(this);
}

device();
 edge.dev();
device.call(edgeX, [23, 11]);