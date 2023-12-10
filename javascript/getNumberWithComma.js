//11000 to 11,000 or 1100000 to 1,100,000
export const getNumberWithComma = (number) => {
    if (number.toString().length < 4) return number;
    //123456789
    for (let i = number.toString().length - 3; i > 0; i -= 3) {
        number = number.toString().slice(0, i) + "," + number.toString().slice(i);
    }
}

getNumberWithComma(993); // 993
getNumberWithComma(1993); // 1,993
getNumberWithComma(123456789); // 123,456,789