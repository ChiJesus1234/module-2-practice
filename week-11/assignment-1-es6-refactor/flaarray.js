 //Flatten One Level (Level 3: Array Accumulator)
//Learning expectation: Accumulate arrays into a new array and understand immutable combination (concat/spread). Given an array of arrays, flatten it into a single array (one level deep).

const nested = [[1, 2], [3, 4], [5]];
// expected: [1, 2, 3, 4, 5] 

const flattened = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattened); // Output: [1, 2, 3, 4, 5]

