/* 1 Function with two parameters, default value for the second one.*/

function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greet("Arif"));
console.log(greet("Arif", "Hi"));