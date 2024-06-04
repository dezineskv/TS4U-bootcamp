// create a program that calculates the total number of hours from a given number of days. Use data type Number
const hoursInDay = new Map();

// add values to it
let day = hoursInDay.set('hours', 24);

console.log(hoursInDay.get('hours'));

if (hoursInDay.has('hours')) {
    console.log(`Hours is ${hoursInDay.get('hours')}`)
}
else {
    console.log("No hours error")
}