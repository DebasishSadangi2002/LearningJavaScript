const a = [1,2,3,4]
const b = [5,6,7,8]

//a.push(b)
console.log(a); // it inserts b array not the element of b

const c = a.concat(b)
console.log(c); // it can be used to join two arrays but not suitable for more than 2 arrays

const d = [...a, ...b]
console.log(d); // it is called spread method to join multiple arrays


const e = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
const f = e.flat(Infinity) // flattens array of array
console.log(e,f)
