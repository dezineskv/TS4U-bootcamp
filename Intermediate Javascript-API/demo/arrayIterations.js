// filter. can omit index and array.
// if num is divisible by 2 it is even. save to a variable.
let numbers3 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers3.filter((num) => num % 2 === 0
)
console.log(evenNumbers)
// returns [ 2, 4, 6 ] because it satisfies the condition


// map
const numbers2 = [15,20,33,55];
// omit parenthesis if only one parameter
const numbers = numbers2.map(num => num * 10
)
console.log(numbers)
// returns [ 150, 200, 330, 550 ]. calculates each element's condition.


// find
const shirts = ["small", "medium", "large"];
//word length greater than 5 characters
const longShirts = shirts.find(shirts => shirts.length > 5
)
console.log(longShirts)
// returns medium


//slice
const toppings = ["pepperoni", "mushroom", "olive"];
const slicedToppings = toppings.slice(1,3);
console.log(slicedToppings);
// returns [ 'mushroom', 'olive' ]


//splice
const dogs = ["poodle", "terrier", "corgi"];
//splice could include params (start, end, item1, item2, ...rest)
//here we're removing terrier (1 item) and adding chihuahua in its place.
const removed = dogs.splice(1,1,"chihuahua");
console.log("removed: ", removed);
console.log("original: ", dogs);
// returns removed:  [ 'terrier' ] and original:  [ 'poodle', 'chihuahua', 'corgi' ]


//split
const sentence = "Hello, words of a sentence here";
const words = sentence.split(" ");
console.log("Words ", words);
// returns Words  [ 'Hello,', 'words', 'of', 'a', 'sentence', 'here' ]