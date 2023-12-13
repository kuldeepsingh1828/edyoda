class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    toString() {
        return `Human name is ${this.name} having age ${this.age} and gender ${this.gender}.`
    }
}

// let human1 = new Human('John', 23, 'male', '5.5', '60kg');

class Student extends Human {
    grade = 'A';
    constructor(name, age, gender, rollNo, marks) {
        super(name,age,gender);
        this.rollNo = rollNo;
        this.marks = marks;
    }

    getMarks() {
        return this.marks;
    }

    getGrade() {
        if (this.marks >= 80) {
            this.grade = 'A';
        } else if (this.marks >= 60) {
            this.grade = 'B';
        } else if (this.marks >= 40) {
            this.grade = 'C';
        } else {
            this.grade = 'D';
        }
        return this.grade;
    }

    getRollNo() {
        return this.rollNo;
    }

    toString() {
        return `Student name is ${this.name} having age ${this.age} and rollNo ${this.rollNo}.${this.name} have marks ${this.marks}.`
    }
}