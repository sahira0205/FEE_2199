var h1=document.createElement("h1");
h1.innerHTML= `<ins>Sahira <ins>`;
var body=document.querySelector("body");
body.appendChild(h1);
var summary=document.createElement("p");
summary.innerHTML=`<p><b>Summary:</b>Seeking a beginner role to enhance and explore my technical knowledge gained at Chitkara University.<br>Highly motivated to help the ogranization to strengthen its customer relationship</p>`;
var body=document.querySelector("body");
body.appendChild(summary);

var img=document.createElement('img');
img.setAttribute( "src","Sahira.jpg");
img.style.width="200px";
var body=document.querySelector("body");
body.appendChild(img);

var h2Education = document.createElement("h2");
h2Education.innerText = "Education";
document.body.appendChild(h2Education);

var ul = document.createElement("ul");
ul.innerHTML = `
  <li>Class X (CBSE)</li>
  <li>Class XII (CBSE)</li>
  <li>Currently Persuing BE-CSE from Chitkara University</li>
`;
document.body.appendChild(ul);

var h2Skills = document.createElement("h2");
h2Skills.innerText = "Skills";
document.body.appendChild(h2Skills);

var Skillsul = document.createElement("ul");
Skillsul.innerHTML = `
<li><b>Front-End:</b>Html,CSS,JavaScript</li>
<li><b>Backend:</b>Python</li>
<li><b>Other:</b>C Programming</li>
`;
document.body.appendChild(Skillsul);

var h2Hobbies = document.createElement("h2");
h2Hobbies.innerText = "Hobbies";
document.body.appendChild(h2Hobbies);

var Hobbiesul = document.createElement("ul");
Hobbiesul.innerHTML = `
<li>Listening Music</li>
<li>Reading Books</li>
`;
document.body.appendChild(Hobbiesul);

var h2Contact = document.createElement("h2");
h2Contact.innerText = "Contacts";
document.body.appendChild(h2Contact);

var Contactul = document.createElement("ul");
Contactul.innerHTML = `
<li><b>Email:</b>sahiraarora119@gmail.com</li>

`;
document.body.appendChild(Contactul);