class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}.`
    }
}

let firstStudent = new Student("Colt", "Steele", 3);
let secondStudent = new Student("Blue", "Steele", 4);
