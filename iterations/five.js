//for each loop

const movies =[
    {
        name: "2012",
        release: "2012",
        genre: "sci-fi"
    },
    {
        name: "deadpool",
        release: "2015",
        genre: "Action"
    },
    {
        name: "Raid",
        release: "2016",
        genre: "Crime-Action"
    },
    {
        name: "Martian",
        release: "2017",
        genre: "sci-fi"
    },
]

movies.forEach((item) =>{
console.log(`${item.name}, ${item.genre}`);
}
)