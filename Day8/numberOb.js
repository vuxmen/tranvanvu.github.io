var radius = '';
var int1 = null;
var int2 = null;
var number = null;
var c = '';
var d = ''
var int = null;

$('.btn-check').eq(0).click(function() {
	radius = $('input').eq(0).val();
	console.log(typeof radius);
	if (radius < 0 || radius === undefined || isNaN(radius) === true) {
		$('.spn-check').eq(0).html(' Nhập sai');
	} else if (radius.length === 0) {
		$('.spn-check').eq(0).html(' Chưa nhập dữ liệu');
	}
	else {
		$('.spn-check').eq(0).html(' Ok');
	}
});

$('.btn-result').eq(0).click(function() {
	if (radius < 0 || radius === undefined || isNaN(radius) === true) {
		$('.spn-result').eq(0).html('Nhập sai');
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
		$('.spn-check').eq(1).html('Nhập sai');
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
		$('.spn-result').eq(1).html('Nhập sai');
	} else {
		if (int1 <= int2) {
			sum = (int1 + int2) * (int2 - int1 + 1) / 2 - int1 - int2;
		} else {
			sum = (int1 + int2) * (int1 - int2 + 1) / 2 - int1 - int2;
		}
		$('.spn-result').eq(1).html('Tổng là: ' + sum);
	}	
});

$('.btn-result').eq(2).click(function() {
	c = $('input').eq(3).val();
	if (isNaN(c) === true || c <= 2) {
		$('.spn-result').eq(2).html('Nhập sai');
	} else {
		number = parseInt(c);
		for (var i = 2; i < number; i ++) {
			if (number % i === 0) {
				$('.spn-result').eq(2).html('Không là số nguyên tố');	
				return;
			} else {
				$('.spn-result').eq(2).html('Là số nguyên tố');
			}
		}
	} 
});

$('.btn-result').eq(3).click(function() {
	d = $('input').eq(4).val();
	int = parseInt(d);
	var tong = 0;
	if (d === '') {
		$('.spn-result').eq(3).html('Chưa nhập số');
	} else if (isNaN(d) === true || d <= 2) {
		$('.spn-result').eq(3).html('Nhập sai');
	} else {
		console.log(int);
		for (var i = 2; i < int; i ++) {
			if (int % i !== 0) {
				tong = tong + i ;
			}
		}
		$('.spn-result').eq(3).html('Tổng các số nguyên tố <= ' + int + ' là: ' + tong);
	}
	
});




































