// Question 3:
/** 
 Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. 
 The calculator should input two numbers and an operator: +, -, *, / from the user. 
 It should perform operation according to the operator entered and must take input in given format.
 * */

var num1 = prompt("Enter the No. 1")
var num2 = prompt("Enter the No. 2")
var operator = prompt("Enter the Operator")
switch (operator) {
    case '+':
        console.log(+num1 + +num2)
        break
    case '-':
        console.log(num1 - num2)
        break
    case '*':
        console.log(num1 * num2)
        break
    case '/':
        console.log(num1 / num2)
        break
    default: console.log("No Matching Operator")
}