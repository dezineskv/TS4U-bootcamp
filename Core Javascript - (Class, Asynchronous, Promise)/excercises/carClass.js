class Car {
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
        this.speed = 10
    }

    getAcceleration(amount) {
        this.speed += amount;
        console.log(`${this.brand} is now traveling at ${this.speed} mph`)
    }
// 30 is arg. so 30+10 will return 40 speed with getAcceleration method processed.

// take 40 - 20 to get 20 as the new doBrake amount
    doBrake(amount) {
        if(this.speed - amount >= 0){
            this.speed -= amount
        } else {
            this.speed = 0
        }

        console.log(`${this.brand} ${this.model} has slowed down to ${this.speed} mph`);
    }
}
// creates object properties
const car1 = new Car("Toyota", "Camry", 2015)

// calls method on the object
car1.getAcceleration(30)
car1.doBrake(20)