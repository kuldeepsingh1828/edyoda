/**
 * Question 4:
 Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
 For example,
 Input: LISTEN and SILENT
 Output: True
 Input: HELLO and JELLO
 Output: False
 */

Rahul
Hural

debugger;
let str1 = "PASS"; // ["L", "I", "S", "T", "E", "N"]
let str2 = "SAAP"; // ["S", "I", "L", "E", "N", "T"]

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let str1Arr = str1.split("");
    let str2Arr = str2.split("");

    for (let i = 0; i < str1Arr.length; i++) {
        if (str2Arr.indexOf(str1Arr[i]) === -1) {
            return false;
        }
    }
    return true;
}

    function newAnagram(str1, str2) {
        if (str1.length !== str2.length) {
            return false;
        }
        let str1Arr = str1.split("");
        let str2Arr = str2.split("");

        for (let i = 0; i < str1Arr.length; i++) {
            if (str2Arr.filter(e => e == str1[i]).length != 1) {
                return false;
            }
        }
        return true;
    }
console.log(newAnagram(str1, str2)); // true

