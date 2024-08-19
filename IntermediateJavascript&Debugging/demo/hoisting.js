// var gets hoisted
console.log(x); // undefined because initialization/value isn't known yet
var x = 5; // initialization stays where it is with var
console.log(x); // returns 5 

//The above code is essentially interpreted as:
var x; // Declaration is hoisted, but not the initialization/value
console.log(x); // undefined
x = 5; // Assignment remains in place
console.log(x); // returns 5 now that the initialization/value is known

// function expressions behave differently with var. The var greet2 is hoisted, but not the function expression. var is initialized with undefined.
greet2(); // TypeError: greet is not a function

var greet2 = function() {
    console.log("Hello!");
};

// use let or const
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // Now it returns 10

// function declarations are hoisted, so the function can be called before its declaration
greet(); // returns "Hello!"

function greet() {
    console.log("Hello!");
}

greet(); // returns "Hello!"

