const score=400;
console.log(score);

const balance= new Number(450)
console.log(balance);

console.log(score.toString());

//you can convert number to string and then apply string methods on it, also there are few methods for Number as well.
console.log(balance.toString().length);


//tofixed (used in ecommerce webites

const Cart= new Number(4000.765)
console.log(Cart.toFixed(1));
// you can remove the number after dot in the ultimate value.

// toprecision
const otherNumber =23.8966

console.log(otherNumber.toPrecision(3));


const newotherNumber =223.8966

console.log(newotherNumber.toPrecision(3));



// convert 100000 to good looking 1,000,000 according to us standards but you can change to other countries standards

const lomo =1000000

console.log(lomo.toLocaleString());

//output =1,000,000

//-------------------Maths--------------------
//Maths library come with javasccript default

console.log(Math);

console.log(Math.abs(-4)); //using abs method minus value convert into positive value and positive value cannot convert into minus value, for that we have a different method

console.log(Math.round(4.3));//IF value is lower then .5 then it will choose 4
console.log(Math.round(4.6));// if value is more then .5 it will choose 5
console.log(Math.round(4.5));// if the value is .5 then it will choose 5.

console.log(Math.ceil(4.2));//Always choose 5
console.log(Math.floor(4.8));//Always choose 4

console.log(Math.min(3,2,1,6,39));//choose minimum value and for opposie, you can use max methods.


console.log(Math.random());//value always between zero and 1, but you can chnge the output using some methods

console.log(Math.random()*10);// nOW THE output will be bertween 0 to 10,

console.log(Math.random()*10 +1);// If you want to avoid the 0 value just add+1 , now all the output will be bigger than 0 and 1.

//you can write i=the code better
console.log((Math.random()*10)+1);

//you can also use math.floor to avoid all the extra digits
console.log(Math.floor(Math.random()*10)+1);
//now i want to avoid extra digit behind our value
const min =50

const max= 90

console.log(Math.floor(Math.random() * (max -min +1)) + min);
