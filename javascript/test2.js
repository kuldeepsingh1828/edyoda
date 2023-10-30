var x = 343;


fun();

function fun() {
    x = 23;
    console.log("first function...")
}

console.log(x);


/**
 * 
 * phase 1:
 * x:23
 * fun:f(){}
 * 
 * phase 2:
 * first function...
 * 23
 */