// Higher order function:If one function takes another function as argument

// Print name 20 times
function printName(func,num){
    for(let i=1;i<=num;i++){
        func();
    }
};
let myName=function(){
    console.log("Raman");
};
printName(myName,20);  //Prints name 20 times

// //Print even number
function even(func,arr1){
    for(let i=1;i<=5;i++){
        if(i%2==0){
            console.log("Even");
        }
        else{
            console.log("Odd");
        }
    }
    func();
}
let arr=[];
let input=function(){
    for(let i=1;i<=5;i++){
         arr=prompt();
    }
}
even(input,arr);


//Array methods:Map
let num=[1,2,3,4];
let cube=function (num){
    return num**3;
}
let newArr=num.map(cube());
console.log(newArr);