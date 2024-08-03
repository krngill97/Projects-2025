// const myArr =[0,1,2,3,4,5,]

// console.log(myArr[3]);//output 3, starting from 0

// //interview question/answer: array copies operation create shallow copies.
// // deep copies do not share ssame reference

// const myHero =["superman", "spiderman"]

// const myArr2 = new Array (0,1,2,3,4,5)// with this method of declaring Arrays, you dont have to write sqaure bracket, this way it automaticaaly convert it to arrays.

// //arrays methods

// myArr.push(6)
// myArr.push(9)
// // with push method you can add value in array bracket
// console.log(myArr);

// //pop remove last value in array
// myArr.pop()

// myArr.unshift(56)//unshift add value at starting of an array,  but this is a problem we dont want it sometimes in big array
// // myArr.shift()//shift method remove first inserted value in array.

// console.log(myArr.includes(104));// include use to check if the value is in array and the output comes in boolean form.
// console.log(myArr.indexOf(56))// give the exact number of value in the array. output 0. if the value does not exit the output will be -1.

// const newArr = myArr.join()//.join chnage the type of array to string.

//slice ,splice
//interview question : splice simply manipulate the whole array, by removing the values and make a new array but slice do not effect, splice change the array and take out portion.

//slice:

const myArr = [0,1,2,3,4,5,6,7,8]

console.log( "a:" ,myArr);

const myArr1 = myArr.slice(3,6)
console.log("b:" , myArr);
//DOES NOT INCLUDE lastvalue
console.log(myArr1);


//splice

const myArr2 = myArr.splice(2,6)
console.log("c:", myArr);

console.log(myArr2);// include last value as well









