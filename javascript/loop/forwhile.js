for (var i = 1; i < 100; i++) {
    var flag = 0; //flag is used to check if number is prime or not
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        console.log(i); // 1 2 3 5 7
    }
}

var i = 1;

while (i < 100) {
    var flag = 0; //flag is used to check if number is prime or not
    var j = 2;
    while (j < i) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
        j++;
    }
    if (flag == 0) {
        console.log(i); // 1 2 3 5 7
    }
    i++;
}

