console.log('Step 1');

//asynchronous
setTimeout(function () {
    console.log('Step after a delay of 3 seconds');
}, 3000)

console.log('Step 3');
console.log('All Done');