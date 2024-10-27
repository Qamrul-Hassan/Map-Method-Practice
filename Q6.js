/* 6. Access the city property of a nested object using dot notaion and optional
chaining. */

let user ={
    profile:{
        address: {
            city: "Dhaka"
        }
    }
};
console.log(user.profile.address.city);