// const myset = new Set();
/* new is keyword
capital letter means it's a class
new set is an object from the new class stored in/as mySet
assign values within the bracket */

const mySet = new Set([1,2,3,4]);
// returns: mySet is Set(4) { 1, 2, 3, 4 }

// to add values use .add() method. put the value as a argument
mySet.add(5);
// returns mySet is Set(5) { 1, 2, 3, 4, 5 }

// clear method clears all values
// mySet.clear();
console.log('mySet is' , mySet);
// returns mySet is Set(0) {}


// .has() method returns a boolean. needs to console.log directly for .has() vs the variable
mySet.has(5);
// console.log(mySet.has(5));
// returns mySet is Set(5) { 1, 2, 3, 4, 5 } true

// .size is a property
// console.log(mySet.size);
// returns 5

// for of loop. loops/iterates thru mySet elements & stores all values in variable (let) 'value'
// Question: is for of loop used on objects?

for (let value of mySet) {
    console.log(value);
    // returns all values stacked & removed dupes
    // 1
    // 2
    // 3
    // 4
    // 5
}
