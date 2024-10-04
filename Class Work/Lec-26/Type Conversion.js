//Type Conversion
console.log(1+2); //3

console.log(1+"2"); //12  (1 is converted into string type before concat with string 2)

console.log(5-"2"); //3 (2 is converted into number to perform substraction with number 5)

console.log(10+"A"); //10A

console.log(10-"A"); //NaN

console.log(10+"2"-"A") //NaN

console.log(typeof(1+"2")); //string

console.log(10+"0"+"1"); //1001

//string to number
let a="2";
console.log(typeof(a)); //string

let c=Number(a);
console.log(typeof(c)); //number

let d=parseInt(a);
console.log(typeof(d)); //number