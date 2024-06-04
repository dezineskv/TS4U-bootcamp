// find unique elements from a given array & return them in a new array by removing dupes
// creating function to process a new array with only even numbers

const origValues = [5,6,6,7,10,10,11,12];
const evenNumbers = [];
const oddNumbers = [];

function getEvens(values) {
const uniqueSet = new Set(values);

for (const evens of uniqueSet) {
    uniqueSet.add(evens);
}

const uniqueArr = Array.from(uniqueSet);
console.log(uniqueArr);

for (let i =0; i < uniqueArr.length; i++) {
    if (uniqueArr[i] % 2 == 0) {
        evenNumbers.push(uniqueArr[i]);
    }
    else {
        oddNumbers.push(uniqueArr[i]);
    }
}
}

const uniqueValueArr = getEvens(origValues);
console.log(oddNumbers);
console.log(evenNumbers)