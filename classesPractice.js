class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}.`
    }
    markLate() {
        this.tardies += 1
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`
    }
}

let firstStudent = new Student("Colt", "Steele", 3);
let secondStudent = new Student("Blue", "Steele", 4);
