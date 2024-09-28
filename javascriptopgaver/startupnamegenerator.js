// Startup Name Generator //
// Setup function
function getStartupName(){
    // Array 1: First part of the startup name
    const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];

    // Array 2: Second part of the startup name
    const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

    let firstName = firstWords.at(Math.random() * firstWords.length)
    let secondName = secondWords.at(Math.random() * secondWords.length)
    return `${firstName} ${secondName}`;
}
const startupName = getStartupName()
console.log(`Your startup name could be: ${startupName}`)