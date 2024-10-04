//Prototype are the mechanism by which JavaScript objects inherit features from one another.
var person1={
    name:'Raman',
    id: '2189',
    subject:'FEE'
};
console.log(person1);//{ name: 'Raman', id: '2189', subject: 'FEE' }
const person2= Object.create(person1);
console.log(person2);//{} because by default prototype object is created.  __proto__(it refers to data we are trying to access)
console.log(person2.name);//Raman
person2.name='Shiwangi';
console.log(person2);//{ name: 'Shiwangi' }
const person3=Object.create(person2);
console.log(person3);//{}
console.log(person3.name);//Shiwangi
console.log(person2.__proto__==person1); //true
console.log(person3.__proto__==person1); //false
console.log(person3.__proto__==person2); //true

//First class objects by default have null value
console.log(Object.prototype.__proto__); //null

var num=20;
console.log((num.__proto__=Number.prototype.__proto__));//[Object: null prototype] {}
console.log(Object.prototype.__proto__==Number.__proto__); //false