const myMap = new Map();
// new map is a built-in class (via 'new' keyword) initializing an instance via object which is myMap

myMap.set('name', 'kim');
myMap.set('age', 100)

console.log(myMap);

// to get key console log the property get on the key
console.log(myMap.get('age'));

// has is a boolean
console.log(myMap.has('age'));

// delete method on map. delete via key
myMap.delete('age');
console.log(myMap);

// Question/comment: confirming that Map class is different than map filtering method
