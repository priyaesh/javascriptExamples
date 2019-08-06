let string = 'abc';
let result = '';

//  string.split('').forEach(function(string) {
//   result += string;
// });
// for (var v of string) {
//   alert(v);
// }

// var ar = ["max","mona"], o = {}

// ar.forEach(w => w.split('').forEach(e => o[e] = (o[e] || 0)+1));
// console.log(o);

var arr = ["max","mona"],
    counts = {};

arr = arr.join("").split(""); // transforms the initial array into array of single characters
arr.sort();
arr.forEach((v) => (counts[v] = (counts[v])? ++counts[v] : 1));

console.log(arr); 
