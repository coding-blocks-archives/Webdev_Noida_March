var slip = true;

function getBurger(){
    return new Promise(function(resolve, reject){
          if(slip) {
              var data = {};
              data.burger = 'mc veg';
              resolve(data);
          }
          else {
              reject('Wrong slip');
          }
    })
}

function getDrink(data){
    return new Promise(function(resolve, reject){
        if(slip) {
            data.drink = 'sprite';
            resolve(data);
        }
        else {
            reject('Wrong slip');
        }
  })
}

function getPrice(data){
    var price = 0;
    return new Promise(function(resolve, reject){
        if(data.burger == 'mc veg') {
            price += 10;
        }
        if(data.drink == 'sprite') {
            price += 5;
        }

        resolve(price)
  })
}

    getBurger()
        .then(getDrink)
        .then(getPrice)
        .then(function(data){
            console.log(data);
        })
        .catch(function(data){
            console.log(data);
        })

// main();
console.log('Bye');