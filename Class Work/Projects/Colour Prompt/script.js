let pr=prompt("Enter Rgba value(eg.rgba(255, 99, 71, 0.5)):");
document.querySelector("p").textContent = "The RGBA value you entered is: " +pr;
var body=document.querySelector("body");
body.style.backgroundColor = pr;