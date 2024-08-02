function outerFunction() {
    const outerVariable = "I am from the outer function";

    function innerFunction() {
        console.log(outerVariable); // inner function has access to outerVariable
    }

    return innerFunction; // Return the inner function
}

const closureFunction = outerFunction(); // closureFunction now holds a reference to innerFunction

closureFunction(); // When called, it still has access to outerVariable