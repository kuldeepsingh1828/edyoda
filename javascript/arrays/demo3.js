//find
//findIndex
//filter

//find an element is present in array or not
var arr = [1, 2, 3, 4, "3", 5];

function find3(n) {
    return n == 3;
}

var result = arr.find(find3); //3  returns first ELEMENT which satisfies the condition

var resultIndex = arr.findIndex(find3); //2 returns INDEX of first element which satisfies the condition


var filteredArr = arr.filter(find3); //[3,3] returns all elements which satisfies the condition