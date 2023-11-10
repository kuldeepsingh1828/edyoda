
/**
 *   Question 1:
 Write a program to search if a number exists in an array. 
 If the number exists then return the position. 
 If it exists MULTIPLE time then return an ARRAY with all the POSITIONS. 
 If the number doesn't exist then return -1;
 For example,
 Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
 Output: 3
 Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
 Output: [0, 5]
 Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
 Output: -1
 */


// position = findIndex + 1
//if findIndexOf and lastIndexOf are same then 1 time found
//filter the value
//map

let arr1 = [1, 2, 3, 4, 5, 1, 3] //multiple time
let arr2 = [1, 2, 9, 4, 5, 1, 5] //no time
let arr3 = [1, 2, 4, 4, 5, 1, 3] //1 time
let searchValu = 3;
function findPosition(arr) {
    let pos = arr.map((e, i) => {
        if (e == searchValu) {
            return i + 1;
        } else {
            return -1;
        }
    }).filter(e => e != -1);

    if (pos.length == 1) {
        return pos[0];
    } else if (pos.length > 1) {
        return pos;
    } else {
        return -1;
    }
}
console.log(findPosition(arr1))
console.log(findPosition(arr2))
console.log(findPosition(arr3))