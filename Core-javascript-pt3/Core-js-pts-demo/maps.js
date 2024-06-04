const myMap = new Map();
myMap.set('name', 'Kim');
console.log(myMap);

console.log(myMap.get('name'));

console.log(myMap.has('name'));

myMap.delete('name');
console.log(myMap)