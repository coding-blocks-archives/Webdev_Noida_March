// function hello(){
//     var x = 3;
//     function bye(){
//         var x = 7;
//     }

//     return x;
   
// }


// var m = hello();
// console.log(m);

// function foo() {
// 	var a = 2;
//     var b = 3;
// 	function bar() {
//        return {a:a, b:b};
// 	}

// 	return bar;
// }

// var baz = foo();

// baz(); // 2 -- Whoa, closure was just observed, man.


function shop(a,b, gst){
   console.log(a + b + gst(a,b));
}


shop(2,4, function(c,d){
   return c+d;
});

