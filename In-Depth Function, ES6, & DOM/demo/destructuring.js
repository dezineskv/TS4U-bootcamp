// destructuring objects
const person = { name: 'Alice', age: 30 };
const { name, age } = person;
console.log(age);

// destructuring arrays
const frameworks = ["React", "Nextjs", "Express", "Nodejs"];
const [ framework1, framework2, anyName ] = frameworks;
console.log(framework1);
console.log(framework2);
console.log(anyName);
// returns the first 3 items

// destructure arrays with numbers
const numbers = [1,2,3,4,5,6,7];
const [first, second, third, ...resNumbers] = numbers;
// returns the first 3 items
console.log(first);
console.log(second);
console.log(third);
// returns the rest of the items
console.log(resNumbers);