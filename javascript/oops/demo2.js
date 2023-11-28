function Human(firstName, lastName, age, address, isTeacher) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
    if (isTeacher) {
        this.salary = 0;
        this.getSalary = function () {
            return this.salary;
        }
    } else {
        this.fees = 0;
        this.getFees = function () {
            return this.fees;
        }
    }
}


//with new keyword called as constructor
const Teacher = new Human('John', 'Sinha', 23, 'India');
const Student = new Human('Leela', 'Ji', 34, 'India');


Human.prototype.getAge = function () {
    return this.age;
}


const Teacher1 = new Human('John 2', 'Sinha', 23, 'India', true);
const Student1 = new Human('John 3', 'Sinha', 23, 'India', false);

console.log(Teacher.getAge());
console.log(Student.getAge());

