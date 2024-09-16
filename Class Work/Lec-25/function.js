//functions-
// heart of JS

// function (function name)(){ // parameter are pased here
//     executable part of function
// }
// function name() argument are passed here

// example:
// function sum(a,b){
//   var c sum =a+b;
// }
// sum();

// function sum(a,b) // a,b are parameter
// { 
//  var c=a+b;
// console.log(c);
// }
// sum(5,3)  // 5,3 are arguments aka function call.

//default arrgument
function multiply (a,b=3){
    var c= a*b;
    console.log(c);
}
console.log(5); // 5 output
multiply(5);// NaN outbut
multiply(5);