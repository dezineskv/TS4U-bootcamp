// importing from the find largest file
import { learning, name } from './namedExport.js';
import { findLargestNum } from './exportLargestValue.js';

console.log(findLargestNum(20,10));
// for named export, no need to import with keyword. instead use autoimport extension.
console.log(name, learning());
