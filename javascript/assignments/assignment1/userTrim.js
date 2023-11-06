function userTrim(str) {
    var startIndex = 0;
    var endIndex = str.length - 1;
    var firstChar = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            startIndex++;
        } else {
            break;
        }
    }
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i] == ' ') {
            endIndex--;
        } else {
            break;
        }
    }
    return str.substring(startIndex, endIndex + 1);
}

var str1 = 'Today is';
var str2 = '      a beautiful day     '
var str3 = ' In Hawaii.     '
var result = userTrim(str1) + " " + userTrim(str2) + " " + userTrim(str3);