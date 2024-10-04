//Return Keyword

//function termination:1.function defination 2.return keyword
function info(name,age){
    console.log(My name is ${name}.I am ${age} Years old);
}
info("Raman","19"); //My name is Raman.I am 19 Years old

function multiply(a,b){
    let c=a*b;
    return c;
    console.log(c); //It will not print after return statement
}
multiply(2,5);  //prints nothing