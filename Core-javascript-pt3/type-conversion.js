// implicit coercion ex using + operator, type gets converted automatically. 
const num = 10;
const str = '10';
// const str = 10; this would be addition, not concatenation

const result = num + str;
console.log('result is', result);
console.log('Type of result is', typeof result); // returns a string

// explicit example
const age = '25';
// convert to number by using parseInt() method. pass variable into the method.
const convertedAge = parseInt(age);
// store converted value in a variable to call
console.log('Type of age after conversion is ', typeof convertedAge);

// convert number to a string example. apply method to the variable.
const age2 = 21;
const convertedAge2 = age2.toString();
console.log('Type of age2 after conversion is ', typeof convertedAge2);


