if (true) {
    console.log("true is a truthy value")
}
if ("hello") {
    console.log("non empty string is a truthy value")
}
if ("") {
    console.log("is a falsy value and will not execute")
}
if (50) {
    console.log("number is a truthy value")
}
if (0) {
    console.log("0 is a falsy value and will not execute")
}
if (["javascript array"]) {
    console.log("array is a truthy value")
}