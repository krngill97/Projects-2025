// console.log(2>1);

// console.log(2>=2)

// console.log(1>=2)


//above we can see comparison operators are working fine but in case of null its little different

console.log(null == 0)
console.log(null >=0)
console.log(null <=0)
console.log(null >0);

//why is >= and <= is giving true?
//the reason is that an equality check == and comparison > < >= <= work differently, comparison convert null to a number, treating it as 0. that's why null>= 0 is true and null>0 is false.\

// let's try comparison with undefined

console.log(undefined >= 0);
console.log( undefined == 0);

//for undefined everything is false no matter what.

/// strict check === it also check datat type, below is an example

console.log("2" ==2);// true because == dont check data type either string or number

console.log("2" ===2);//False because ==== It check data type as well, both haas to be either strings or numbers.



