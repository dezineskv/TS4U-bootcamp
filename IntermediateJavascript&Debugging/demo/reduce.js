const numbers = [1,2,3];
const sum = numbers.reduce(function (accumulator, currentValue) {
return accumulator + currentValue; }, 0); //0 is the initial value & second param
console.log(sum) //outputs 6.
// formatting/syntax for reduce(): array.reduce(callback, initialValue) initialValue is optional
 // callback function takes 2 params minimum - being accumulator & current value
// callback updates the accumulator each iteration
// calculates (1 accumulator). 1+(2 accumulator)=3. (3 accumulator)+3=6. returns 6.

const array1 = [10, 200, 300, 40];
const initialValue = 1;
const withInitial = array1.reduce((accumulator, currentValue) => accumulator * currentValue,
  initialValue,
);

console.log(withInitial);
// (*)  1 * 10=10 + 10*200 + 2000*300 + 600000*40 = 24,000,000
// returns 24000000

// const array1 = [10, 200, 300, 40];
// (+)  1 + 10=11 + 11+200 + 211+300 + 611+40= 651
// returns 651

// const array1 = [10, 20, 30, 40];
// (+)  1 + 10=11 + 11+20 + 31+30 + 61+40=101
// returns 101
