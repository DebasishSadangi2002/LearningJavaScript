// Singleton - Objects declared using constructor

const User = new Object() // Singleton decalaration
console.log(typeof User);

User.id = "123abc"
User.name = "Sam"
User.isLoggedIn = false

//console.log(User)

const RegularUser= {
    email : "sam@gmail.com",
    fullname: {
        firstname : 'Samuel',
        lastname : 'Simon',
    }
}

//console.log(RegularUser.fullname.firstname);


//Combining Objects
obj1 = {1:'a',2:'b'}
obj2 = {3:'c',4:'d'}

const obj3 = Object.assign({}, obj1,obj2)
console.log(obj3);
const obj4 = {...obj1, ...obj2}
console.log(obj4);
 
//Getting the keys and values of object
console.log(Object.keys(User));
console.log(Object.values(User));
console.log(Object.entries(User));

//to check wheater an object have a property or not
console.log(User.hasOwnProperty('isLoggedIn'));
