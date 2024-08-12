const num = 1000
console.log(num);
console.log(typeof num);// number tyoe

const balance = new Number(1000)
console.log(balance);
console.log(typeof balance);// object type

console.log(balance.toString().length)
console.log(balance.toFixed(2));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'))


