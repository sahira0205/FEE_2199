//restricting the form default behaviour using event called event.preventDefault().

// var form=document.querySelector("form");
// form.addEventListener('submit',function(event)
// {event.preventDefault();
//     console.log("form submitted")
// });


//Geeting input data in our console

var form=document.querySelector("form");
form.addEventListener('submit',function(event)
{let inp=document.querySelector("input");
   console.log(inp.value);

let p=document.querySelector("p");
p.innerText=inp.value;

    event.preventDefault();
   
});

