//Function expression

//Anonymous function:Function without a name
const val=function (a,b){
    return a+b;
};
console.log(val); //[Function: sum]
console.log(val(5,3)); //8

var value=function (num){
    return num*num*num;
}
console.log(value(5)); //125