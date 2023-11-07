var array = [1, 2, 3, 4, 5];
function mul(n1, n2) {
    return n1 * n2;
}

function div(n1, n2) {
    return n1 / n2;
}

var multi = array.reduceRight(mul); //120
var divi = array.reduceRight(div);//0.20833333333333334