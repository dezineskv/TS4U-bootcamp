// find unique elements in array & return them in a new array by removing dupes
// use a function as a solution to remove duplicates & return a new array

// create function that will return new array by removing dupes
function removeDuplicateValues(values) {
// use a param & we will call the function. use 'values' as param
// console.log(values)
// returns all of the array values within brackets

// to return new array use Set method to remove dupes, store it in a new variable
// pass variable 'values' as a param
const uniqueSet = new Set(values);
// console.log(uniqueSet);
// returns unique values as an object format not array format. need to convert it to an array using Array.from() built-in method
const uniqueArr = Array.from(uniqueSet);
// console.log('uniqueArr', uniqueArr);
return uniqueArr; // includes the function call's variable, returns from a function & use console after calling the function. return keyword ends the function execution after it is called.
}
// store the array in a variable duplicateValues then use it as the argument
const duplicateValues = [1,2,2,3,4,4,5,6];
const uniqueValueArr = removeDuplicateValues(duplicateValues);
console.log(uniqueValueArr);

// can use approach with console.log var within function to see the output or use return within function then console after the invoke stored in a new variable
// Question: if use return [1,2,3] but 1,2,3 isn't within the array, will it return 1,2,3?--tested-yes
