//Button
var button=document.createElement("button");
console.log(button);
button.innerText="Click Me";
var body = document.querySelector("body");
body.appendChild(button);


//h1
var h1=document.createElement("h1");
console.log(h1);
h1.innerText="Dom Elements: ";
var body = document.querySelector("body");
body.appendChild(h1);


h1.append("Learning in js");
body.prepend(h1);
body.remove();