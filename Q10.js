// 10. Use filter() to return all objects where a specific condition is met (e.g., products priced above a certain amount):

let products = [
    {name: "Shirt", price: 2000}, 
    {name: "Pant", price: 3000}, 
    {name: "T-Shirt", price: 700},
];

let minPrice = 700;

let expensiveProducts = products.filter(({price})=>price >minPrice);
console.log(expensiveProducts);