var age = 10;
function thisTest() {
    console.log(this.age);
}

let newTest = () => {
    console.log(this.age);
}

const obj = {
    name: 'John',
    age: 30,
    thisTest: thisTest,
    newTest: newTest
}
console.log("thisTest() called from object");
obj.thisTest(); // window object
console.log("newTest() called from  object");
obj.newTest(); // window object