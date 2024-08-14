// Singleton
// object literals 

const user = {
    name: "Debasish",
    age: 22,
    location: "Bhawanipatna",
    email: "dsadangi@gmail.com"
}

//Accessing values
console.log(user.name);
console.log(user['name']);

//Changng Values
user.name = "Debsish Sadangi"
console.log(user.name);

//Ading a function to User 
user.greeting = function(){
    console.log("Hello JS User");
}
console.log(user.greeting);// returns datatypr
console.log(user.greeting());// returns function value

//Accesing an variable of the same object we use "this" keyword
user.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(user.greeting2);// returns datatypr
console.log(user.greeting2());// returns function value


//Lock changing values
Object.freeze(user)
user.name = "Debsis"
console.log(user.name);

