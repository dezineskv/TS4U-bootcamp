// BLOCK scope example is the condition between the braces

// cannot access inner scope outside of the braces like a children to parent level but child can access parent.
function myFunction (){
    // parent block returns first
    let x = 1;
    console.log(x);  

    // child block
    if (x == 1) {
        let y = 2;
        console.log(y); // returns next
    }

    console.log(x ); // returns last
}
// call & run function. returns first log, then the block's log, then the bottom log last because it's outside of the block
myFunction();

// ----------FUNCTION scope similar to block
const global = 'global'; // universal access/root/global scope

function myFunc () {
    let z = 5;
    console.log(z);
}
// console.log('z not accessible from here', z) doesn't work from here-outside the function's scope

myFunc();
console.log(global);
// console.log('z not accessible from here', z) doesn't work from here-outside the function's scope

