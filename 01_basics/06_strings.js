// String Operations in JavaScript

// 1. Concatenation
let str1 = "Hello";
let str2 = "World";
let concatenatedStr = str1 + " " + str2;
console.log("Concatenation:", concatenatedStr);  // Output: "Hello World"

// 2. Repetition
let repeatedStr = str1.repeat(3);
console.log("Repetition:", repeatedStr);  // Output: "HelloHelloHello"

// 3. Slicing
let slicedStr = concatenatedStr.slice(0, 5);
console.log("Slicing:", slicedStr);  // Output: "Hello"

// 4. Length
let length = str1.length;
console.log("Length:", length);  // Output: 5

// 5. Uppercase/Lowercase Conversion
let upperStr = str1.toUpperCase();
let lowerStr = str1.toLowerCase();
console.log("Uppercase:", upperStr);  // Output: "HELLO"
console.log("Lowercase:", lowerStr);  // Output: "hello"

// 6. Strip (Trim)
let strWithSpaces = "  Hello  ";
let strippedStr = strWithSpaces.trim();
console.log("Trim:", strippedStr);  // Output: "Hello"

// 7. Replace
let replacedStr = concatenatedStr.replace("World", "JavaScript");
console.log("Replace:", replacedStr);  // Output: "Hello JavaScript"

// 8. Split
let splitStr = replacedStr.split(" ");
console.log("Split:", splitStr);  // Output: ["Hello", "JavaScript"]

// 9. Join
let joinedStr = splitStr.join(" ");
console.log("Join:", joinedStr);  // Output: "Hello JavaScript"

// 10. Find (IndexOf)
let index = replacedStr.indexOf("JavaScript");
console.log("IndexOf:", index);  // Output: 6

// 11. String Formatting (Template Literals)
let name = "John";
let age = 30;
let formattedStr = `My name is ${name} and I am ${age} years old.`;
console.log("String Formatting:", formattedStr);  // Output: "My name is John and I am 30 years old."

// 12. Checking Substring (Includes)
let contains = replacedStr.includes("JavaScript");
console.log("Contains 'JavaScript':", contains);  // Output: true
