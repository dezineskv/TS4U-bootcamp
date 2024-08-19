const numbers = [1,2,3];
const sum = numbers.reduce(function (accumulator, currentValue) {
return accumulator + currentValue; }, 0); //0 is the initial value & second param
console.log(sum) //outputs 6.
// -array.reduce(callback, initialValue)
 // Takes 2 params.
// calculates (1 accumulator). 1+(2 accumulator)=3. (3 accumulator)+3=6. returns 6.
