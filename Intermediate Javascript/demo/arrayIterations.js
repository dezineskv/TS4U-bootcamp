const ages = ["stone", "middle ages", "modern age"];

ages.filter((name,index, array) => {
    console.log("each name: ", name);
    console.log("each index: ", index);
    console.log("whole array: ", array);
});
console.log(ages)
/* RETURNS
each name:  stone
each index:  0
whole array:  [ 'stone', 'middle ages', 'modern age' ]
each name:  middle ages
each index:  1
whole array:  [ 'stone', 'middle ages', 'modern age' ]
each name:  modern age
each index:  2
whole array:  [ 'stone', 'middle ages', 'modern age' ]
[ 'stone', 'middle ages', 'modern age' ] */

// map
const numbers2 = [15,20,33,55];
// omit parenthesis if only one parameter
const numbers = numbers2.map(num => num * 10
)
console.log(numbers)
// returns [ 150, 200, 330, 550 ]

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