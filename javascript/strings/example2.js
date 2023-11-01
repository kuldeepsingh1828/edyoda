var s = 'Naman';

var rs = s.toLowerCase().split('').reverse().join('');
if (rs == s.toLowerCase()) {
    console.log("Palindrom")
} else
    console.log("NOT Palindrom")