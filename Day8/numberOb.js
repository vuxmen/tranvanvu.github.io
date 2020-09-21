var radius = '';
var int1 = null;
var int2 = null;
var number = null;
$('.btn-check').eq(0).click(function() {
	radius = $('input').eq(0).val();
	console.log(typeof radius);
	if (radius < 0 || radius === undefined || isNaN(radius) === true) {
		$('.spn-check').eq(0).html(' Nhập sai dữ liệu');
	} else if (radius.length === 0) {
		$('.spn-check').eq(0).html(' Chưa nhập dữ liệu');
	}
	else {
		$('.spn-check').eq(0).html(' Ok');
	}
});

$('.btn-result').eq(0).click(function() {
	if (radius < 0 || radius === undefined || isNaN(radius) === true) {
		$('.spn-result').eq(0).html('Nhập sai dữ liệu');
	} else if (radius.length === 0) {
		$('.spn-result').eq(0).html('Chưa nhập dữ liệu');
	} 
	else {
		$('.spn-result').eq(0).html('Thể tích hình cầu (làm tròn) là: ' + Math.round((4/3*(Math.PI)*(Math.pow(radius, 3)))));
	}
});

$('.btn-check').eq(1).click(function() {
	var a = $('input').eq(1).val();
	var b = $('input').eq(2).val();
	if (a >= 0 || b >= 0 || isNaN(a) === true|| isNaN(b) === true) {
		$('.spn-check').eq(1).html('Nhập sai dữ liệu');
	} else {
		$('.spn-check').eq(1).html('Ok');
		int1 = parseInt(a);
		int2 = parseInt(b);
		console.log(int1, int2);
	}
});

$('.btn-result').eq(1).click(function() {
	var sum = 0;
	if (int1 >= 0 || int2 >= 0 || isNaN(int1) === true|| isNaN(int2) === true) {
		$('.spn-result').eq(1).html('Nhập sai dữ liệu');
	} else {
		if (int1 <= int2) {
			sum = (int1 + int2) * (int2 - int1 + 1) / 2 - int1 - int2;
		} else {
			sum = (int1 + int2) * (int1 - int2 + 1) / 2 - int1 - int2;
		}
		$('.spn-result').eq(1).html('Tổng là: ' + sum);
	}	
});

$('.btn-check').eq(2).click(function() {
	var c = $('input').eq(3).val();
	console.log(isNaN(number));
	if (isNaN(number) === true) {
		console.log(number);
		$('.spn-check').eq(2).html('Nhập sai dữ liệu');
	} else {
		$('.spn-check').eq(2).html('Ok');
		var number = parseInt(c);
	}
});
$('.btn-result').eq(2).click(function() {
	
});








