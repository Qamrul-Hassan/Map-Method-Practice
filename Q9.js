/* 9. Use map() on a string array to create a new array where each string is prefixed with "Hell0".*/

let names = ['Arif', 'Shajal', 'Hassan'];
let greetings = names.map(name => `Hello ${name}`);
console.log(greetings);