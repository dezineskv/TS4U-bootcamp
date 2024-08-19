//1 Use Descriptive Variable and Function Names:
// Bad
const x = 10;

// Good
const numberOfApples = 10;



//2 Declare Variables Properly:
// Bad
var name = "John";

// Good
const name = "John";




//3 Avoid Global Variables:
// Bad
const globalVar = 42;

function addToGlobalVar(value) {
    globalVar += value;
}

// Good
function addToVar(value, globalVar) {
    return globalVar + value;
}

//4 Don't Repeat Yourself (DRY):
// Bad (repeated code)
const area1 = length * width;
const area2 = height * width;

// Good (DRY)
function calculateArea(length, width) {
    return length * width;
}

const area1 = calculateArea(length, width);
const area2 = calculateArea(height, width);



//5 Document Your Code:
/**
 * Adds two numbers.
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
    return a + b;
}