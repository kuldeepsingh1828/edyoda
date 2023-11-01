var s = "java script";

var words = s.split(" ")
for (var word of words) {
    console.log(word[0].toUpperCase() + word.substring(1))
}