class Student {
    constructor(name, grade, month) {
        this.name = name
        this.grade = grade
        this.month = month
        this.assignments = 0
    }
// pass in arg. It gets added to current assignments amount. 
    getCurrent(scores) {
        this.assignments += scores;
        console.log(`During the month of ${this.month}, ${this.name} is getting a grade of: ${this.grade}
        The current score is ${this.assignments}`)
    }
// Then the getImprovements method processes after we call it. Calculates an increase or decrease amount.
    getImprovements(scores) {
        if(this.assignments + scores > 0){
            this.assignments += scores
        } else if (this.assignments + scores <= 0) {
            this.assignments -= scores
        }       
        else {
            this.assignments = "no improvement"
        }
        console.log(`${this.name}'s progress has changed by ${this.assignments} point(s)`);
    }
}
// 'new' keyword creates object & its properties per initializing the constructor
const student1 = new Student("Student1", "Pass", "June")

// calls method on the object and pass in arguments
student1.getCurrent(50)
student1.getImprovements(1)