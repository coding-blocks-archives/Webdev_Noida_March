// function orderPizza(cb){
//     console.log("We have many pizzas");
//     setTimeout(function(){
//         var x = choosePizza();
//         cb(x);
//     },0);
//     console.log("We have 10 pizzas left");
  
// }

// function orderDrink(){
//     setTimeout(function(){
//         chooseDrink();
//     },0);
    
// }

// function calculatePrice(){

//     orderPizza(function(i){
//         console.log("Pizza Response");
//         console.log(i);
//     });
//     orderDrink();
//     // console.log(y);
//     console.log("Processing.....")
//     // var total = x + y;
//     // console.log(total);
// }

// function choosePizza(){
   
//        return 20;
//     // a => pizza => 200
//     //b => pizza => 300 
//     // a + b
//     // 2s
// }

// function chooseDrink(){
//     // 1s
//         console.log("Drink request recieved");
//         console.log("2")
// }

// calculatePrice();

function getImage(){
   console.log('Image received...');
   console.log('Processing');
   splitImage(function(pixels){
     console.log('First command to magnify');
       magnifyPixels(function(cb){
         console.log('Magnifying ...')
            cb(pixels+2);
       });
   });
  
   Enhancement();
}

function magnifyPixels(pixelfn){
  console.log('Magnify the splitting pixels');
  pixelfn(function(pixel){
    console.log(pixel);
  })
}


function splitImage(cb){
  setTimeout(function(){
    console.log('splitting Image');
    console.log('Splitting Done');
    cb(250);
  },0);

}

function Enhancement(){
   console.log('Enhancing Image');
}


getImage();