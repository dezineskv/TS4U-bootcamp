// find unique elements in array & return them in a new array by removing dupes
// create function that will return 2 new arrays by removing dupes. One array to have even numbers only.
const origValues = [1,2,2,3,4,4,5,6];
const evenNumbers = [];
const oddNumbers = [];

function evenValues(values) {
    const uniqueSet = new Set(values);
  
    for (const evens of uniqueSet) {
        uniqueSet.add(evens);     
        }

    const uniqueArr = Array.from(uniqueSet);
    console.log(uniqueArr);

    for (let i = 0; i < uniqueArr.length; i++) {
        if (uniqueArr[i] % 2 == 0) {
            evenNumbers.push(uniqueArr[i]);
        } 
        else {
           oddNumbers.push(uniqueArr[i]);
        }     
    }   
}

const uniqueValueArr = evenValues(origValues);

console.log(oddNumbers);
console.log(evenNumbers);

// find number of hours in a given day, using data type Number
// I'm using a window prompt to capture any input of a number of days
let enterDays = window.prompt("enter # of days");
// check that the entry is a number
console.log("Input data type is always string ", typeof(enterDays));

// window input values are string format, so parse it first
let convertedDays = parseInt(enterDays);

    // calculate the number of hours for that day per input
    function calculateHoursFromDays(convertedDays) {
        const hoursInADay = 24;
        const totalHours = convertedDays * hoursInADay;
        // if user entered a non number prompt/alert them
        if(isNaN(totalHours)){
            alert("not a number");
        }
        return totalHours;   
    }

const totalHours = calculateHoursFromDays(convertedDays);

// is days is only 1 then show 'day' instead of 'days'
if (convertedDays === 1) {
    window.alert(`Total hours for ${convertedDays} day is: ${totalHours}`);

} else {
    window.alert(`Total hours for ${convertedDays} days is: ${totalHours}`);
}

// sum of array 
const myNums = [1, 2, 3, 4, 5];
let sum = 0;
myNums.forEach((number) => {
    sum += number;
});
console.log(sum);

// reverse order of string via function and loop
function reverseString(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
reverseString("hello");

// alternative reverse method using a loop
const original = 'Hello, World!';
let reversed = ""; 
for (let i = original. length - 1; i >= 0; i--) { 
    reversed += original[i]; 
} 
console. log(reversed); 

// reverse using reverString method
const originalString = 'Hello, World!';
const reversedString = reverseString(originalString);
console.log(reversedString);


// find largest number from array. also using spread operator

const numbers = [5, 2, 9, 1, 5, 6];
const largestNumber = Math.max(...numbers);

console.log("The largest number in the array is:", largestNumber);