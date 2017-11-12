function conversion(temp) {
	return (temp - 32) / 1.8;
}

var subtractThenDivide = conversion(20);
document.write(subtractThenDivide);



function conversion(temp) {
	return (temp - 32) / 1.8 + "<br>";
}

var subtractThenDivide = conversion(25);
document.write(subtractThenDivide);



