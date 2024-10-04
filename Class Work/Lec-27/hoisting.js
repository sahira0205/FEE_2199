// Hoisting
console.log(a); //undefined
var a=10;

myfunc(); //20
console.log(myfunc()); //20 undefined
function myfunc(){
    var b=20;
    console.log(b);
}

// let and const:temparel dead zone :reference error

// Execute context
// Call stack(Global execute context):
// 1.memory creation phase
// 2.code execution phase