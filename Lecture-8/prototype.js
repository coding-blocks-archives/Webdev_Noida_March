// function Person(a,b){
//     this.name = a;
//     this.place = b;
//  }
 
//  Person.prototype.getDetail = function(){
 
//      return this;
//  }
 
//  var aayush = new Person('aayush', 'delhi');
//  ƒ (){
 
//      return this;
//  }
//  aayush
//  Person {name: "aayush", place: "delhi"}
//  Person.prototype
//  {getDetail: ƒ, constructor: ƒ}
//  Person.prototype.getDetail();
//  {getDetail: ƒ, constructor: ƒ}
//  Person.prototype.getDetail();
//  {getDetail: ƒ, constructor: ƒ}
//  aayush.getDetail();
//  Person {name: "aayush", place: "delhi"}
//  Person.prototype.update = function(){
//      this.name = 'arora';
 
//  }
//  ƒ (){
//      this.name = 'arora';
 
//  }
//  aayush.getDetail();
//  Person {name: "aayush", place: "delhi"}name: "arora"place: "delhi"__proto__: Object
//  Person.prototype.update = function(){
//      this.name = 'arora';
//      console.log(this);
//  }
//  ƒ (){
//      this.name = 'arora';
//      console.log(this);
//  }
//  aayush.update();
//  VM231:3 Person {name: "arora", place: "delhi"}
//  undefined
//  aayush.getDetail();
//  Person {name: "arora", place: "delhi"}