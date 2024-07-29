//primitive datatypes: (these data types are call by value)

//7 types: String, Numbers, Boolean, null, Undefined, Symbol, BigInt

// JavaScript is called a dynamic language because it doesn't just have a few dynamic aspects, pretty much everything is dynamic.

//All variables are dynamic (both in type and existance), and even the code is dynamic. You can create new variables at runtime, and the type of variables is determined at runtime. You can create new functions at any time, or replace existing functions. When used in a browser, code is added when more script files are loaded, and you can load more files any time you like.

const score=100
const scoreValue=100.3

const isloggedIn=false

const outSideTemp=null


let userEmail;

const id= Symbol('123')
const anotherId= Symbol('123') 
console.log(id === anotherId); // both are not same, because of symbol and symbol make unique.

const bigNumber = 981375908992998
console.log(bigNumber);

//-----------------------------------------------------------------------------------------------------------

//Reference datatypes or non-primitive datatypes: (reference can be directly allocated in memory)

//Arrays, Objects, Functions

const heroes = ["superman", "batman", "spiderman"] //[] anything in these brackets is arrays

let myObj ={      //{} anything in curly brackets are object
    name:"karan",
    age:"22",

}

// we can treat function as variable in javascript

 const myFunction = function() {
         console.log("hello");
}


