// promises are future Event. technicaly they are objects.
// by deafult promise has 3 state: pending (default state),fulfield,rejected  


// promise accept 2 callback:resolve,reject

// let like =true;
// let p=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         if (like){resolve("Yeah she likes me");
//         } else{
//             reject("Nahh");
//         }
//     }, 2000);
// });


// Comsuming promise:then

// p.then((value)=>{
//     console.log(`Message:${value}`);
// },(err)=>{
//     console.log(`Message: ${err}`);
// })


//comsuming promise: .catch

// p.then((value)=>{
//     console.log(`message: ${value}`);
// })
// .catch((err)=>{
//     console.log(`message:${err}`)
// })


//promise chaining:

// let p1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("promise 1 resolved");
//     },2000);
// });
// p1.then((value)=>{
//     console.log(value);
//     let p2=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("promise 2 resolved");
//         }, 2000);
//     });
//     return p2;
// }).then((value)=>{
//     console.log("Done!!");
   
// }).then((value)=>{
//     console.log("ok now done!");
// })
// ;


//Promise inside function

function maggilekaraao(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let dukaankhulihai=true;
            if (dukaankhulihai) {
                resolve("Maggie mil gye");
            }else{
                reject("Maggie nhi milli");
            }
        }, 2000);
    });
}
maggilekaraao()
.then((value)=>{
    console.log(value);
})
.catch((err)=>{
    console.log(err);
});
