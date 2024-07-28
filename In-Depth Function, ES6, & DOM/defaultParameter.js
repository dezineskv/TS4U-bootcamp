// default parameters
const greet = (name = "kim") => {
    console.log(`Hello, ${name}`)
}
// greet("generic name");
greet();

const calculateArea = (width =5, height =2) => {
    return width * height;
}

console.log(calculateArea());
// console.log(calculateArea(5,3));

// example 3 param is overwritten
const createPerson = (firstName = "Me", lastName = getLastName()) => {
    return `${firstName} ${lastName}`
}
const getLastName = () => {
    return 'V'
}
// console.log(createPerson('Kim', 'Vidal'))
console.log(createPerson('Kim'))