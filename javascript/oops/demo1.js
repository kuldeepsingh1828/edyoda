function Student(firstName, age, address, lastName, isMale) {
    let grossSalary = 10000;
    this.firstName = firstName;
    this.age = age;
    this.address = address;
    this.lastName = lastName;
    this.isMale = isMale;
    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
    this.getGrossSalary = function () {
        return grossSalary;
    }
}

const s1 = new Student('John', 23, 'India', 'Sinha', true);           //with new keyword
const s2 = new Student('Leela', 34, 'India', 'Ji', false);           //with new keyword

console.log(s1.getFullName());
console.log(s2.getFullName());
console.log(s1.getGrossSalary());
console.log(s2.getGrossSalary());