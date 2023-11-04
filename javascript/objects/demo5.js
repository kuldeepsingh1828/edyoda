var person = { name: 'Person 1', age: 22, phone: '7583213119' }

var q = prompt("type the key name");
console.log('Before', person);
delete person[q];
console.log('After', person);