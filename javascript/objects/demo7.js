//shallow copy

var person = { name: 'Person 1', age: 22, phone: '7583213119' }
// var person2 = { name: 'Person 2', age: 23, phone: '7583213119' }
var person2 = Object.assign({a:10}, person);
delete person.name;

console.log(person)
console.log(person2)