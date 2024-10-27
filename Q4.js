/* 4. Refactor a function that multiplies two numbers into an arrow function. */

let ary1 = [ 1, 4, 6, ];
let ary2 = [ 2, 9, 12];

let combineArray = [...ary1, ...ary2];
let maxValue =Math.max (...combineArray);

console.log(combineArray);
console.log(maxValue);