// importing from the find largest file
import { findLargestNum } from './largestValue.js';
import { learning, name } from './namedExport.js';

console.log(findLargestNum(20,10));

// for named export, no need to import with keyword. instead use autoimport extension.
console.log(name, learning());