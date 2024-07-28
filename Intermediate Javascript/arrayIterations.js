const numbers3 = [1,2,3,4,5];

numbers3.filter((number, index, array) => {
    console.log("each number: ", number);
    console.log("each index: ", index);
    console.log("whole array: ", array);
// will return 1, 0, array then 2,2,array etc.
})

// numbers2.filter((number, i, array) => {})
// can omit index and array.
// if num is divisible by 2 it is even. save to a variable.
const evenNumbers = numbers3.filter((num) => num % 2 === 0
)
console.log(evenNumbers)

// map
const numbers2 = [1,2,3,4,5];
// omit parenthesis if only one parameter
const numbers = numbers2.map(num => num * 3
)
console.log(numbers)
// returns [ 3, 6, 9, 12, 15 ]

//squared numbers
const numbers8 = numbers2.map(num => num * num
)
console.log(numbers8)
// returns [ 1, 4, 9, 16, 25 ]

// find
const fruit = ["apple", "pear", "bannana"];
//fruit length greater than 6 characters
const longFruits = fruit.find(fruit => fruit.length > 6
)
console.log(longFruits)
// returns bannana

//slice
const fruits = ["apple", "pear", "bannana"];
const slicedFruits = fruits.slice(1,3);
console.log(slicedFruits);

//splice
const colors = ["red", "blue", "yellow"];
//splice could include params (start, end, item1, item2, ...rest)
//here we're removing blue (1 item) and adding orange in its place.
const removed = colors.splice(1,1,"orange");
console.log("removed: ", removed);
console.log("original: ", colors);

//split
const sentence = "Hello, sentence here";
const words = sentence.split(" ");
console.log("Words ", words);