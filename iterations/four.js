//for object loop we for for in instead of for of method

const games={
    GTA:'grand theft auto',
    NFS:'need for speed',
    POP: 'prince of persia'

}

for(const games_1 in games){
    console.log( `${games_1}: ${games[games_1]}`);
    
}