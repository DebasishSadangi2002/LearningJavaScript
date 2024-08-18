// this keyword is used to access current context
User = {
    username : "Debasish",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}`);
        console.log(this)  // returns the current context
    }
}

User.welcomeMessage()
User.username = "Sadangi"
User.welcomeMessage()
console.log(this); // returns noithing in node env but in broweser env it will return window


//Declaration of arraow function


// const abc = function(){
//     let username = 'hitesh'
//     console.log(this);
    
// }

const abc = () => {
    let username = 'hitesh'
    console.log(this);
    
}
abc() // returns empty 

//Explicit return(return keyword is used)
const addTwo = (a,b) =>{
    return a+b
}
//Implicit return
const addThree = (a,b,c) => (a+b+b)

console.log(addTwo(1,2));
console.log(addThree(1,2,3));

//Implicit return of objects
const obj1 = () => ({username:"Debasish"})
console.log(obj1());
