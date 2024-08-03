//Dates
//so many diiferent methods to define dates , check below

//interview question, is date a javascript object =yes.

let myDate = new Date()

console.log (myDate.toString());


console.log (myDate.toLocaleString());

console.log(myDate.toDateString());

let myCreatedDtae =new Date(2024, 0,23) // Months start from 0 in javascript 0 = Jan.
console.log(myCreatedDtae.toDateString());

//another format
let anotherDate= new Date(2023,0 ,23, 5,3)
console.log(anotherDate.toLocaleString());

//another format
let OanotherDate= new Date("2023-01-30")
console.log(OanotherDate.toLocaleString());

//time stamps

let myTimeStamps = Date.now ()
console.log(myTimeStamps);
console.log(OanotherDate.getTime());//compare time, used in hotel booking websites or airbnb.

//important interview question:

console.log(Math.floor(Date.now()/1000 ));//convert milliseconds to second by diving by 1000.

//to remove decimal value use math.floor or math.round.

let newDate= new Date()
console.log(newDate.getMonth());//use can find other likedays ,hour or more using otherm ethods.

//string interpolation

let oneMoreDate = new Date()
console.log(`${oneMoreDate.toDateString()} yoyo bro`);

//important method, learn more on mdnwebdoc and use ctrl+space for suggestions. 

console.log(oneMoreDate.toLocaleString('default', {weekday:"long"} ))
;




