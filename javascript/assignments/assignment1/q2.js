// Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.

function checkChar(i) {
    switch (i.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log("vowel");
            break;
        default:
            if (i.toLowerCase() >= 'a' && i.toLowerCase() <= 'z') {
                console.log("Consonant")
            } else {
                console.log("Non-Alphabet");
            }
    }
}
checkChar('a');
checkChar('i');
checkChar('k');
checkChar('A');
checkChar('9');

