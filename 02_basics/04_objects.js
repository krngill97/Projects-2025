//singleton

// const tinderUser= new Object()// this is also object, this is singleton object

const tinderUser= {}//non-singleton object

tinderUser.id= "123abc"
tinderUser.name="mina"
tinderUser.isLoggedIn=false

console.log(tinderUser);// outpot will be {}

const regularUser ={//you can add more objects into objetcs and objects into arrays
    email:"yoyo@gmail.com",
    fullname :{
        userfullname:{
            firtsname:"mina",
            lastname:"yoyo"

        }
    }

}

console.log(regularUser.fullname.userfullname.lastname);



const obj1 ={
    1:"a" ,2:"b"
}

const obj2 ={3:"c", 4:"d"}

// const obj3 ={obj1, obj2};

// const obj3 = Object.assign({}, obj1,obj2) //{} use this to store obj1 amd obj2 {} this is target and obj1andobj2 are sources. 
// console.log(obj3);

//spread operator

const obj3 = {...obj1, ...obj2} 
console.log(obj3);

const users = [
    {
        id:1,
        email: "bonfo@gmail.com"
    },
    {
  id:5,
        email: "bonffsfo@gmail.com"
    }
]

console.log(users[0].email);// create multiple objects in array
console.log(tinderUser)
console.log(Object.keys(tinderUser));// it is important, out put value will be an array and we can apply loop on it, database.

console.log(Object.values(tinderUser));// we can get values and well


//want to  check propert

console.log(tinderUser.hasOwnProperty('dododada'));// output false
console.log(tinderUser.hasOwnProperty('id'));//output true

// destructuring

const course ={
    coursename: "JS",
    Price: "$799",
    courseintructor: "karan",


}

// console.log(courseintructor); wrong, do not use like this.

// console.log(course.courseintructor);

//another way to print the value;

// const {courseintructor} = course

// console.log(courseintructor);

//we can change the name as well

const{courseintructor: sir} = course// we can change the big name to small if we want.
console.log(sir);

const navbar =({Company})=>{

}
navbar(Company="yoyo"),

console.log(Company); // this is for React, but this is also destructuring.


//API

