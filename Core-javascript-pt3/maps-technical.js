// create instance/varirable for the object within the Map class
const productPrice = new Map();

// add values to it
productPrice.set('apple', 50);
productPrice.set('bannana', 20);
productPrice.set('orange', 30);

console.log(productPrice.get('apple'));

// const product = 'grape';
const product = 'bannana';

// if (productPrice.has(product)) {
//     console.log("The map contains the grape product & price", productPrice.get(product))
// }
// if (productPrice.has('bannana')) {
//     console.log("The map contains the grape product & price", productPrice.get('bannana'))
// }
if (productPrice.has('bannana')) {
    console.log(`The map contains the grape product & price: $ ${productPrice.get('bannana')}`)
}
else {
    console.log("Sorry there's no product")
}