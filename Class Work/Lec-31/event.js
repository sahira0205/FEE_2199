//mutliple buttons:

// var btn=document.querySelector('button');
// console.dir(btn);

// btn.onclick=function(){
//     console.log("button was pressed");
// }

// var btns=document.querySelectorAll('button');
// for(btn of btns){
//     btn.onclick=myfunc;
//     btn.onmouseenter=function cursor(){
//         alert("Your cursor was over me")
//     }
// }

// function myfunc(){
//     console.log("button was pressed");
// }

//Multiple events/event listener:

var btn=document.querySelector('button');
console.dir(btn);

btn.onclick=function(){
    console.log("button was pressed");
}

var btns=document.querySelectorAll('button');
for(btn of btns){
    // btn.onclick=myfunc;
    // btn.onclick=hello;
    btn.addEventListener('click',myfunc);
    btn.addEventListener('click',hello);
};

function myfunc(){
    console.log("button was pressed");
}

function hello(){
    console.log("hello");
}

var par=document.querySelector('p');
par.addEventListener('mouseenter',para);

function para(){
    console.log("paragraph");
}