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

console.log(loginUserMessage());
//username === undefined also written as !username

function loginUserMessage2(username){
    if(!username){
        console.log("Please enter a username");

    }
    return `${username} just logged in`
}
console.log(loginUserMessage2());