for (var i = 1; i <= 10; i++) {
    console.log(i);
}
//1 2 3 4 5 6 7 8 9 10


for (var i = 1; i <= 10; i++) {
    if (i != 5) break; //stop the execution of the loop
    console.log(i);
}


for (var i = 1; i <= 10; i++) {
    if (i != 5) continue;
    console.log(i);
}


for(x in [1,2,3,4,5]){
    console.log(x)
}
 0
 1
 2
 3
 4

for(x of [1,2,3,4,5]){
    console.log(x)
}
1
2
3
4
5