var radius = '';
$('.apply').eq(0).click(function() {
	radius = $('input').eq(0).val();
	console.log(typeof radius);
	if (radius < 0 || radius === undefined || isNaN(radius) === true) {
		$('.check').eq(0).html(' Nhập sai, mời nhập lại');
	} else if (radius.length === 0) {
		$('.check').eq(0).html(' Chưa nhập dữ liệu, mời nhập');
	}
	else {
		$('.check').eq(0).html(' Ok');
	}
});

$('.showResult').eq(0).click(function() {
	if (radius < 0 || radius === undefined || isNaN(radius) === true) {
		$('.result.ex1').html('Nhập sai mời nhập lại');
	} else if (radius.length === 0) {
		$('.result.ex1').html('Chưa nhập dữ liệu, mời nhập');
	} 
	else {
		$('.result.ex1').html('Thể tích hình cầu (làm tròn) là: ' + Math.round((4/3*(Math.PI)*(Math.pow(radius, 3)))));
	}
});

