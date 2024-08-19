function outerFunction() {
    const outerVariable = "I am from the outer function";

    function innerFunction() {
        console.log(outerVariable); // inner function has access to outerVariable
    }

    return innerFunction; // Return the inner function by calling the outer
}

const closureFunction = outerFunction(); // closureFunction now holds a reference to innerFunction

closureFunction(); // When called, it still has access to outerVariable

// other example of lexical scoping & closure
function init() {
    var name = "someone's name"; // name is a local variable created by init function
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  // returns someone's name