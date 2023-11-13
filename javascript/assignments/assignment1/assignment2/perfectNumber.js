//function to check a number is perfect or not
function isPerfectNumber(number) {
    var sum = 0;
    for (var i = 1; i < number; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }
    if (sum == number) {
        return true;
    }
    else {
        return false;
    }
}


// 6
// 1 ----Yes
// 2 ----Yes
// 3 ----Yes
// 4 ----No
// 5 ----No

// 1+2+3 = 6