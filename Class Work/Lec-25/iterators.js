//iterators: 
// pre defined object in js. in which there is iterator prototype.
// iterator prototype has [next(),value]
// next() method prints everythng one by one i.e. one thing at a time  making work efficient.
// object are not iterator it dont have symbol iterator class.
// for of= return value stored in str,array,string,map, set used in iteration
// for in=return Key, not used in iteration

//Array is iterator.
// let arr=[1,2,3,4];
// console.log(arr[Symbol.iterator]);


 //for of: method used in iteration,prints value stored one by one.

// for(i of arr){
//     console.log(i);
//     console.log(arr[i]);
// }


// for in:

// let obj={name:"sahira"};
// for (i in obj){
//     console.log(obj[Symbol.iterator]);
//     console.log(i);
// }
