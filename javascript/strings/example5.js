// longest word
var s = 'i have something'
var words = s.split(" ");
var largest = ''
for (var word of words) {
    if (word.length > largest.length) {
        largest = word
    }
}
console.log("Largest word", largest);