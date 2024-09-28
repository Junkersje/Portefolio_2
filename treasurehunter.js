// Treasure hunter //

// 1: Island setup
const myIsland = ['-', '-', '-', 'T', '-', 'T']

// 1.1 How many moves on the island
const movesOnIsland = myIsland.length;
console.log(`There are ${movesOnIsland}  moves on the island`) //String literal

// 1.2 log each move
for (let move = 0; move < movesOnIsland; move++) {
    if(myIsland[move] === 'T'){
        console.log(`Treasure found at move ${move} :)`)
    } else {
        console.log('No treasure found :(')
    }
}

// 1.3 log how many treasures there are on the island
const numberOfTreasuresOnIsland = myIsland.filter(move => move === 'T').length
console.log(numberOfTreasuresOnIsland)

