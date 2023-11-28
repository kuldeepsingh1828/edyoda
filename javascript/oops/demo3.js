function Person(name, age) {
    this.name = name;
    this.age = age;
    this.toString = function () {
        return `My Name is ${this.name} and I'm ${this.age} years old`;
    }
}

const person1 = new Person('John', 20);
console.log(person1);
console.log(person1.toString()); // John

