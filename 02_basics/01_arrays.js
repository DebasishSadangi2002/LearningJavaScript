//array

const myArr = [0,1,2,3,4,5]
const myHeros = ['Shaktiman','aryaman','spiderman','ironman']

// console.log(myArr);
// console.log(myHeros[2]);

//array method

myArr.push(6) //to add an element at the end
//console.log(myArr);

myArr.pop() // to remove the last element
console.log(myArr); 

myArr.unshift(9)// to add an element at the beginning
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(5));

// Splice and Slice methods

// splice() method changes the contents of an array by removing, replacing, or adding elements in place. It mutates the original array and returns an array containing the deleted elements.

//  slice() method returns a shallow copy of a portion of an array into a new array object. It doesn't modify the original array

arr = [1,2,3,4,5,6,7,8]
console.log('A ' + arr);
console.log( arr.slice(1,3));// no change in arogonal array
console.log('B ' + arr);
console.log( arr.splice(1,3));// change in original array
console.log('C ' + arr);
