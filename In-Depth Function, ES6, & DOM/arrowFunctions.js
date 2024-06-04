// traditional function expression
// USE FOR DEMO
const sumTwoNums = function (a,b) {
    return a + b;
}
console.log(sumTwoNums(1,1));

// USE FOR DEMO
const summer = function (b) {
    return b += 1;
}
console.log(summer(1));

// const myFunc = function () {
//     let z = 5;
//     console.log(z);
// }

// same function in arrow function format
//USE FOR DEMO
const sumTwoNums2 = (a,b) => a + b;

console.log(sumTwoNums2(20,5));


// const sumTwoNums3 = (a,b) => {
//     sumTwoNums(a,b);
//     console.log(sumTwoNums(a,b))
//     return a + b;
// }
// console.log(sumTwoNums2(20,5));

const sumTwoNums4 = (a,b) => {
    return a + b;
}
console.log(sumTwoNums4(1,5));

// example with single line
const sumTwoNums5 = (a,b) => a + b;

console.log(sumTwoNums5(2,3));

// USE FOR DEMO
const summer2 = function (b) {
    return b += 1;
}
console.log(summer2(1));