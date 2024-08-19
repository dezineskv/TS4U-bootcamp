// only declared, not initializing/assigning value it returns undefined
let fName;
console.log(fName);

function doSomething() {
    // doesn't return value, so it will not execute
}
console.log(doSomething());
// returns undefined

// null
let noValue = null;
//explicitly indicates no meaningful value. returns null as the value
console.log("noValue is", noValue);