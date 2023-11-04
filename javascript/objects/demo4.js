var ans = prompt("Interested to create an Object?")
var obj = {}
while (ans) {
    var key = prompt("Enter key name")
    var value = prompt("Enter value for " + key)
    obj[key] = value;
    ans = prompt("Interested to add another key?")
}
console.log("final Object")
console.log(obj)