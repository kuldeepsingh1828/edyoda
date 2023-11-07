//declare an array of 10 numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

//print even numbers from array using for loop
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i]);
    }
}

//print odd numbers from array using for loop
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        console.log(numbers[i]);
    }
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//print prime numbers from array using for loop
for (var i = 0; i < numbers.length; i++) {
    var flag = 0; //flag is used to check if number is prime or not
    for (var j = 2; j < numbers[i]; j++) {
        if (numbers[i] % j == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        console.log(numbers[i]); // 1 2 3 5 7
    }
}