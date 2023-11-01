//vowels count
var s = "let us find vowels in JS";
var vowels = "aeiouAEIOU";

var count = 0;

for (var char of s) {
    debugger;
    if (vowels.includes(char)) {
        count++;
    }
}
console.log("We Found ", count, " Vowels")