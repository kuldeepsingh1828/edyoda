let numarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let strarr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

function isEven(num) {
    return num % 2 === 0;
}

function isOdd(num) {
    return num % 2 !== 0;
}

function double(num) {
    return num * 2;
}


Array.prototype.isEmpty = function () {
    return this.length === 0;
}

Array.prototype.containNumbersOnly = function () {
    return this.every(function (item) {
        return typeof item === 'number';
    });
}

Array.prototype.mapDouble = function () {
    return this.map(double);
}

console.log(numarr.mapDouble());


console.log(numarr.isEmpty());
console.log(numarr.containNumbersOnly());
console.log(strarr.isEmpty());
console.log(strarr.containNumbersOnly());