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

function randomNumGenerator2(range) {
    const arr = [];
    for (let i = 0; i < range; i++) {
        arr.push(i+1);
    }
    for (let i = 0; i < arr.length; i++) {
        const randomIndex = Math.floor(Math.random() * range + 1);
        const num = arr[randomIndex];
        arr[randomIndex] = arr[i];
        arr[i] = num;
    }
    return arr;
}
const rangeForGenerator = 10000;

console.log(`List of unique numbers from 1 to ${rangeForGenerator}`, randomNumGenerator2(rangeForGenerator));