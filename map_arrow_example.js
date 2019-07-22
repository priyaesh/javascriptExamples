<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array.map()</h2>

<p>Creates a new array by performing a function on each array element.</p>

<p id="demo"></p>

<script>
var numbers1 = [45, 4, 9, 16, 25];
//var numbers2 = numbers1.map(myFunction);

//numbers2 = numbers1.map(value => {
//	console.log(value);
//    value = value*2;
//    return value;
//});

numbers2 = numbers1.map(value => value*3);

document.getElementById("demo").innerHTML = numbers2;

function myFunction(value, index, array) {
  return value * 2;
}
</script>

</body>
</html>
