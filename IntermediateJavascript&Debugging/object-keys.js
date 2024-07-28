const person = {
    firstName: "Kim",
    lastName:"Vidal",
    age: 25
}
// can access object properties with dot notation or brackets person.lastName
// person["lastName"]

// getting the keys and returning as an array
const keysArr = Object.keys(person);
console.log(keysArr);
// returns [ 'firstName', 'lastName', 'age' ]

// getting the values
const values = Object.values(person);
console.log(values);

// looping through the array with item representing the values
// for(let item of keysArr) {
//     console.log(person[item]);
// }
// returns Kim
// Vidal
// 25

// to return the pairs like firstName: Kim, use this method by storing the elements in a var
for(const item of keysArr) {
    const value = person[item];
    console.log(`${item}: ${value}`);
}
/* returns firstName: Kim
lastName: Vidal
age: 25 */