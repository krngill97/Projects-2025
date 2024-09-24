//for of loop on array

const number =[1,2,3,4,5,6,7]

for (const num of number) {
    console.log(num)
}

//maps

const map= new Map()

map.set('CAN', 'Canada')
map.set('USA', 'United States of America')
map.set('IN', 'India')
map.set('UK', 'United Kingdom')

//console.log(map);

for (const [key,value]  of map) {
    console.log(key, '=', value);
    
}
    
