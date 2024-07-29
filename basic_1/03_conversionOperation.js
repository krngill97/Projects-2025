let score="33abs"

console.log(typeof score); //you can write like (()) this as well
console.log(typeof (score));

let valueInNumber= Number(score);//no matter what is inside string it will always say number
console.log(typeof valueInNumber);
console.log(valueInNumber);//if you check exact value it will show NAN

//always use big first letter to use conversion. like Number, Boolean
//"33" =>33
// "33abc" =>NAN

//true=1
//false=0

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
 
//1 =>true
// 0=>false
//"karan" => true
// "" => false

let someNumber=33

let stringNumber= String(someNumber)
console.log(stringNumber);

//operations:

let value=3
let negValue=-value
console.log(negValue)

console.log(2-"6")
console.log(6-"2");
console.log("6"-2)
console.log(2+2+2+"5")
console.log("7"+2+1)
console.log("true")

let x=5;
let y=x++;

console.log(`x: ${x} y:${y}`)

let a=10
b=a--
console.log(`a:${a}, b:${b}`)