// @notice Function for generating a list of unique numbers in random order in a given range
// @param range The range of numbers to be generated
// @return an array of unique numbers in the range in random order
function randomNumGenerator(range) {
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < range) {
        uniqueNumbers.add(Math.floor(Math.random() * range + 1))
    }
    return Array.from(uniqueNumbers);
}

const rangeForGenerator = 10000;

console.log(`List of unique numbers from 1 to ${rangeForGenerator}`, randomNumGenerator(rangeForGenerator));