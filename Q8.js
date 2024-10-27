/* 8. Using forEach() on an array of products to log a message with product details. */

let products = [
    {name: "Laptop", price: 60000},
    {name: "Phone", price: 25000},
    {name: "Desktop", price: 40000}
];

products.forEach(product => {
    console.log(`product:${product.name}, Price: $${product.price}`);
});