
var js = {
    name: 'Javascript',
    age: 28,
    ageActual: 28,
    gender: 'Not Sure',
    parent: 'Netscape',
    address: 'MDN',
}

// printing the name property using . operator
console.log(js.name)
// printing the name property using [] operator
console.log(js[name])


//printing all the elements value
for (var key in js) {
    console.log(js[key])
}