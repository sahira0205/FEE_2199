//1.trim
let msg="      good morning     ";
console.log(msg.trim());

//2.uppercase
console.log(msg.toUpperCase());

//3.Lowercase
console.log(msg.toLowerCase());

//4.indexof
console.log(msg.indexOf('r'));

//5.Mutable or unmutable
let txt="have a nice day";
txt[3]='t';
console.log(txt);

//6.Slice(indexstart,indexend-1)
console.log(txt.slice(2));

//7.Replace
let txt1="I love moon";
console.log(txt1.replace('moon','Yue'));

//8.Repeat
let msg1="Idiot \n";
console.log(msg1.repeat(10));

//9.String template literals
let firstName="Ramanjot";
let lastName="Kaur";
console.log("Miss."+ " "+firstName +" "+ lastName);
console.log(Miss. ${firstName} ${lastName}); //preferred