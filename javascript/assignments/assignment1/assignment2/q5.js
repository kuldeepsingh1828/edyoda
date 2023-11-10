// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH

function reverseString(inputStr) {
    var newStr = "";
    for (var i = inputStr.length - 1; i >= 0; i--) {
        newStr += inputStr[i];
    }

    return newStr;
}


var input = "Hello";
var ans = reverseString(input);
console.log(ans);