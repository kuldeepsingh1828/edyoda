/*
Question 2:
Write a program to print following pattern in the console.
54321
5432
543
54
5
*/

for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 5; j >= i; j--) {
        str += j;
    }
    console.log(str);
}

let i = 1;
while (i <= 5) {
    let str = "";
    let j = 5;
    while (j >= i) {
        str += j;
        j--;
    }
    console.log(str);
    i++;
}