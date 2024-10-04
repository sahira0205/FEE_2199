var newh1=document.querySelector("h1");
console.dir(newh1.classList);

//add class
newh1.classList.add('green');

//remove class
newh1.classList.remove('green');

//contains
console.log(newh1.classList.contains('green')); //false

//toggle
newh1.classList.toggle('black');