// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]

let arr = [3, 2, 1, 4, 5, 45];
console.log("BEFORE SORTING: ", arr);
let ascArr = arr.sort((a, b) => a - b);
console.log("AFTER SORTING: ", ascArr);