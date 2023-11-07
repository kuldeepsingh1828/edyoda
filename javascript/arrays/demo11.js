//find sum of array elements
function add(n1, n2) {
    return n1 + n2;
}

function minus(n1, n2) {
    return n1 - n2;
}

var arr = [1, 2, 3, 4, 5]; //15

var sum = arr.reduce(add); //15
var sub = arr.reduce(minus); //-13


/**
 * 
 n1 1 n2 2
 n1 3 n2 3
 n1 6 n2 4
 n1 10 n2 5
 15
 */