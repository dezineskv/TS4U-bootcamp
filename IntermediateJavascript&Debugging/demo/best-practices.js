//1 Use Descriptive Variable and Function Names:
// Bad
const x = 10;

// Good
const numberOfApples = 10;

//2 Declare Variables Properly:------------------------
// Bad
var name = "John";

// Good - use const or let
const name = "John";

//3 Avoid Global Variables:-----------------------------
// Bad
const globalVar = 42;

function addToGlobalVar(value) {
    globalVar += value;
}

// Good. Use parameters to localize variables
function addToVar(value, globalVar) {
    return globalVar + value;
}

//4 Don't Repeat Yourself (DRY):--------------------------
// Bad (repeated code)
const area1 = length * width;
const area2 = height * width;

// Good (DRY). Use parameters within a function then initalize values with arguments.
function calculateArea(length, width) {
    return length * width;
}

const area3 = calculateArea(length, width);
const area4 = calculateArea(height, width);

//5 Document Your Code:------------------------------------
/**
 * getting area is length * width.
 * @param {number} length - The first param represents length
 * @param {number} width - The second param is width.
 * @returns {number} The area of length * width
 */
function area(length,width) {
    return length * width;
}