// creating class without constructor
// class Person {
//     sayHello() {
        // console.log("Hello person class")
    // }
// }

// creating instance and passing in args
// const person1 = new Person("name1", "name2");

// person1.sayHello();

// creating class/object instance via constructor method. Pass in params that are the object's properties/key-value pairs
 
class People {
    constructor(firstName, secondName) {
        this.firstName = firstName
        this.secondName = secondName
    }
    sayHello() {
        console.log(`Hello names are ${this.firstName} and ${this.secondName}`)
    }
}

const people1 = new People("name1", "name2");

people1.sayHello();