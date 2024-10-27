/* Function that takes a name and city as input and returns a multi-line message 
using template literals. */

function introduce (name, city) {
    return `Hello, my name is ${name}.
    I live in ${city}.`;
}

console.log(introduce("Qamrul Hassan", "Dhaka"));