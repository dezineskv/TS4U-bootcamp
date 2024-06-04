const mySet = new Set([1,2,3,4,4]);

mySet.add(5);
mySet.has(5);
console.log(mySet.has(5));

for (let value of mySet) {
    console.log(value);
}
console.log(mySet);

mySet.clear();
console.log(mySet)