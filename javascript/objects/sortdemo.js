var person = { name: 'Person 1', age: 22, phone: '7583213119' }
var keys = Object.keys(person);

keys.sort();
var p2 = {};
for (const key of keys) {
    p2[key] = person[key]
}
console.log(p2)