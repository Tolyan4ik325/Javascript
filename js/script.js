
var array = new Array(10);

console.log(array);

for(var i = 0; i < array.length; i++) {
	array[i] = new Array(10);
}

for(var j = 0; j < array.length; j++) {
	for (var n = 0; n < array[j].length; n++) {
		array[j][n] = j*n;
	}
}

alert(array[3][7]);

