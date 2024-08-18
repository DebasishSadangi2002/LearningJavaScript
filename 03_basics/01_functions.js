function sayMyName(){
    console.log('D');
    console.log('E');
    console.log('B');
    console.log('A');
    console.log('S');
    console.log('I');
    console.log('S');
    console.log('H');
    
}

function addTwoNumbers(n1,n2){
    console.log(n1+n2);
    return n1+n2
}
k = addTwoNumbers(1,2)
console.log(k);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");

    }
    return `${username} just logged in`
}

//console.log(loginUserMessage());


//username === undefined also written as !username

function loginUserMessage2(username){
    if(!username){
        console.log("Please enter a username");

    }
    return `${username} just logged in`
}
//console.log(loginUserMessage2());


function calculateCartPrice(num1){
    return num1
}
//console.log(calculateCartPrice(200));

// Rest operator ...num1 for adding multiple opearands

function calculateCartPrice1(...num1){
    return num1
}
console.log(calculateCartPrice1(200,230,240,350,203));

//Passing object to function
User = {
    username : "Debasish",
    age : 21,
 }

 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
 }
 handleObject(User)

// Passing array to function

const arr = [100,200,300,400,500,600,700]

function handleArray(anyArr){
    console.log(anyArr[3]);
    
}
handleArray(arr)