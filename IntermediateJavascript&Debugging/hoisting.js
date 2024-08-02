console.log(x); // undefined
var x = 5;
console.log(x); // 5


//The above code is essentially interpreted as:
var x; // Declaration is hoisted
console.log(x); // undefined
x = 5; // Assignment remains in place
console.log(x); // 5

sayHello(); // "Hello, World!"

function sayHello() {
    console.log("Hello, World!");
}

function sayHello() {
    console.log("Hello, World!");
}

sayHello(); // "Hello, World!"