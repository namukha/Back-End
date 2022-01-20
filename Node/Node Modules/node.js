let initialMemory = process.memoryUsage().heapUsed;
let word = null;

console.log(word)

let wordArray = [];

for (let i = 0; i < 1000; i++){
    wordArray.push(`${word} count: ${i}`)
    }

    console.log(`Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${process.memoryUsage().heapUsed}. \nAfter using the loop to add elements due to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory`)