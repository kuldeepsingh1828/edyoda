const Obj = {
    name: 'John',
    age: 30,
    getAge: function () {
        console.log(this.age);
    }
}


const p1 = Object.create(Obj);
const p2 = Object.create(p1);
const p3 = Object.create(p2);
const p4 = Object.create(p3);
const p5 = Object.create(p4);

Obj.__proto__.myMethod = function () {
    console.log("myMethod called Obj");
}

p1.__proto__.myMethod = function () {
    console.log("myMethod called p1");
}
p2.__proto__.myMethod = function () {
    console.log("myMethod called p2");
}
p3.__proto__.myMethod = function () {
    console.log("myMethod called p3");
}
p4.__proto__.myMethod = function () {
    console.log("myMethod called p4");
}
p5.__proto__.myMethod = function () {
    console.log("myMethod called p5");
}

console.log(p5.myMethod());
console.log(p4.myMethod());
console.log(p3.myMethod());
console.log(p2.myMethod());
console.log(p1.myMethod());
