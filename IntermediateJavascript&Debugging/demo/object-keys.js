const person = {
    firstName: "Kim",
    lastName:"Vidal",
    age: 100
}
// object properties access with dot notation or brackets person.lastName or person["lastName"]

// getting the keys and returning as an array
const keysArr = Object.keys(person);
console.log(keysArr);
// returns array [ 'firstName', 'lastName', 'age' ]

// getting the values
const values = Object.values(person);
console.log(values);
// returns [ 'Kim', 'Vidal', 100 ]

// looping through the array with item representing the values
for(let item of keysArr) {
    console.log(person[item]);
}

/* returns 
Kim
Vidal
100 */

// to return the pairs like firstName: Kim, use this method by storing the elements in a const 'value'
for(const item of keysArr) {
    const value = person[item];
    console.log(`${item}: ${value}`);
}
/* returns 
firstName: Kim
lastName: Vidal
age: 100 */

for(let item of keysArr) {
    console.log(person[item]);
    console.log(`${item}`); // line to log each set of items
}
/* returns 
Kim
firstName
Vidal
lastName
100
age */