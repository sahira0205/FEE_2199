// [1]// object: used to store complex Data.The keys is used to access data and in array index is used.
// object can be declared in 2 ways  by constructor and literalls;

// 1)constructor:(pre difined in js)
//  var obj= Object(value)[O will be capital always]
//  obj.name="sahira"
//  console.log(obj)

// const obj= new Object();
// obj.name="sahira";
// console.log(obj);
// console.log(typeof obj);

// 2) literals: {Key,value}
// var user=
// {name:"sahira"}
//     name is Key
//     sahira is value
// console.log(user.name)

// const users={
//     "name": "Sahira",
//     age: 19,
//     subject:"FEE",
//     "full name" : "Sahira Arora"
// }
// console.log(users.name)//we can not access white name with dot method , so we [] method
// console.log(users['full name']) //another way of printing
// console.log(typeof users)


// [2]// Changing,update object value:
// users.name="Aditya";
// console.log(users);


// [3]// Object inside object

// const users ={
//     user1:{
//         name:"sahira",
//         age:19
//     },

//     user2:{
//         name:"raman",
//         age:18,
//         user2i:{
//             name:"ramanjot"
//         }

//     },
//     user3:{
//         name:"ranjit",
//         age:23

//     }
// }
// console.log(users.user2.user2i.name)


//[4] // Object inside an array:

// let ar=[
//     user1={
//         name:"sahira",
//         age:18
//     },
//     user2={
//         name:"shiwangi",
//         age:19,
//         user2i:{
//             rollno:12,
//             city:"mohali"
//         }
//     },
//     user3={
//         name:"raman",
//         age:17
    
// }
// ]
// console.log(ar[1].user2i.city)

//[5] // Merging 2 objects:

let obj1={name1:"sahira", age1:19}
let obj2={name2:"raman", age2:18}
let obj3={...obj1,...obj2}
console.log(obj3)
//by constructor
let obj4=Object.assign(obj1,obj2)
console.log(obj4)

