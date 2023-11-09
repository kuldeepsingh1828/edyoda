
// let oddArr = arr.filter(function (x) {
//     if (x % 2 != 0) {
//         return true;
//     } else {
//         return false;
//     }
// })
let arr = [1, 2, 3, 56, 5, 6, 7, 8, 45, 8];

let oddArr = arr.filter(x => x % 2)
let findX = arr.find(x => x == 45)

console.log(oddArr)
console.log(findX)