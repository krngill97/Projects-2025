const marvel_heroes = ["thor", "Ironman", "spiderman"]

const dc_heroes = ["superman", "batman", "flash"]

// marvel_heroes.push(dc_heroes)// with this method .push dc_heroes array convert into single element and while accesing value in dc_heroes array you have to access it two time:
// //using concat method output will be same
// console.log(marvel_heroes[3][1])//output batman

console.log(marvel_heroes);

//to fix the problem, you can use concat in different way:

const allHeroes = marvel_heroes.concat(dc_heroes)//with this style and concst method you can combine two or more arrays.
console.log(allHeroes);
console.log(allHeroes[2]);

//spread operator: modern code use spread method... instead of concat.

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);

//.flat method used for complex
const another_Arr = [1, 2, 3, 4, 5, 6, 7, [67, 5, 6], 93, [23, 1414, 1431, [4, 5]]]
const real_another_Arr = another_Arr.flat(Infinity)
console.log(real_another_Arr);


//datascraping: 

console.log(Array.isArray("karan"));//output false
console.log(Array.from("karan"));//convert string into array
console.log(Array.from({ name: "karan"}));// gives you blank array.//intersting

let score1=100
let  score2=200
let score3=300

//convert multiple variable to arrays

console.log(Array.of(score1,score2,score3));
