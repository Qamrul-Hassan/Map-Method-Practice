// 5. Object destructuring and array destructuring.
let person = {
    name: "Arif",
    age: 40,
    country: "Bangladesh"
};

let { name, age, country } = person;
console.log(name, age, country);

let numbers = [10, 20 , 30 , 40 , 50];
let [first, second , fourth ] = numbers;
console.log(first, second, fourth);