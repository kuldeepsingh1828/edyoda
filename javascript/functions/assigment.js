//Question 1
if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
}

console.log(x);
console.log(y);
console.log(z);



// Question 2


if (true) {
    var x = 10;
}
console.log(x);


//Question 3

let y = 5;
if (true) {
    let y = 10;
}
console.log(y);

//Question 4
const z = 15;
z = 20;
console.log(z);

//Question 5
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}

//Question 6
for (let j = 0; j < 3; j++) {
    setTimeout(function () {
        console.log(j);
    }, 100);
}

//Question 7
{
    var a = 5;
    let b = 10;
}
console.log(a);
console.log(b);

//Question 8
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);

//Question 9
const greeting = "Hello";
greeting = "Hi";
console.log(greeting);

//Question 10
if (true) {
    const message = "This is a constant";
}
console.log(message);

//Question 11
var a = 25;
let a = 30;
console.log(a);