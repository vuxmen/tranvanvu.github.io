var radius = '';
var int1 = ''
var int2 = '';
var number = '';
var int = null;
var numb = '';
var key = '';
var userArr = [];
var user = {
		name: 'Tran Van Vu',
		age: 25,
		mail: 'vutranvan.libra@gmail.com'
	};
var	user1 = {
		name: 'Bill Gates',
		age: 64,
		isStatus: false
	};
var	user2 = {
		name: 'Jeff Bezos',
		age: 56,
		isStatus: true
	};
var	user3 = {
		name: 'Elon Musk',
		age: 49,
		isStatus: false
	};
var	user4 = {
		name: 'Mark Zuckerberg',
		age: 36,
		isStatus: true
	};
userArr.push(user1);
userArr.push(user2);
userArr.push(user3);
userArr.push(user4);

$('.btn-result').eq(0).click(function() {
	var a = $('input').eq(0).val();
	if (a < 0 || isNaN(a) === true) {
		$('.spn-result').eq(0).html('Nhập sai');
	} else if (a === '') {
		$('.spn-result').eq(0).html('Chưa nhập');
	} 
	else {
		radius = parseInt(a);
		$('.spn-result').eq(0).html('Thể tích hình cầu là: ' + Math.round((4/3*(Math.PI)*(Math.pow(radius, 3)))));
	}
});

$('.btn-result').eq(1).click(function() {
	var sum = 0;
	var a = $('input').eq(1).val();
	var b = $('input').eq(2).val();
	if (isNaN(a) === true|| isNaN(b) === true) {
		$('.spn-result').eq(1).html('Nhập sai');
	} else if (a === '' || b === '') {
		$('.spn-result').eq(1).html('Chưa nhập');
	} else {
		int1 = parseInt(a);
		int2 = parseInt(b);
		if (int1 <= int2) {
			sum = (int1 + int2) * (int2 - int1 + 1) / 2 - int1 - int2;
		} else {
			sum = (int1 + int2) * (int1 - int2 + 1) / 2 - int1 - int2;
		}
		$('.spn-result').eq(1).html('Tổng là: ' + sum);
	}	
});

$('.btn-result').eq(2).click(function() {
	var a = $('input').eq(3).val();
	if (isNaN(a) === true) {
		$('.spn-result').eq(2).html('Nhập sai');
	} else if (a === '') {
		$('.spn-result').eq(2).html('Chưa nhập');
	} else if (a <= 2) {
		$('.spn-result').eq(2).html('Không là số nguyên tố');
	} else {
		number = parseInt(a);
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
	var a = $('input').eq(4).val();
	var tong = 0;
	if (a === '') {
		$('.spn-result').eq(3).html('Chưa nhập');
	} else if (isNaN(a) === true) {
		$('.spn-result').eq(3).html('Nhập sai');
	} else if (a <= 2) {
		$('.spn-result').eq(3).html('Không là số nguyên tố');
	} else {
		int = parseInt(a);		
		for (var i = 2; i < int; i ++) {
			if (int % i !== 0) {
				tong = tong + i ;
			}
		}
		$('.spn-result').eq(3).html('Tổng các số nguyên tố <= ' + int + ' là: ' + tong);
	}
});

$('.btn-result').eq(4).click(function() {
	var a = $('input').eq(5).val();
	var tong = 0;
	console.log(a);
	if (a == '') {
		$('.spn-result').eq(4).html('Chưa nhập');
	} else if (isNaN(a) === true || a <= 0) {
		$('.spn-result').eq(4).html('Nhập sai');
	} else {
		numb = parseInt(a);
		for (var i = 1; i < numb + 1; i ++) {
			if (numb % i == 0) {
				tong = tong + i;
			} 
		}
		$('.spn-result').eq(4).html('Tổng các ước số của ' + numb + ' là: ' + tong)
	}
});

$('.btn-result').eq(5).click(function() {
	showKeys(user);
});

function showKeys(obj) {
	var keys = Object.keys(obj);
	$('.spn-result').eq(5).html('Các keys của Object là: ' + keys);
}

$('.btn-result').eq(6).click(function() {
	showValues(user);
});

function showValues(obj) {
	var values = Object.values(obj);
	$('.spn-result').eq(6).html('Các values của Object là: ' + values);
}

$('.btn-result').eq(7).click(function() {
	checkKeys(user);
});

function checkKeys(obj) {
	var _key = Object.keys(obj);
	key = $('input').eq(6).val();
	for (var i = 0; i < _key.length; i ++) {
		if (key === _key[i] ) {
			$('.spn-result').eq(7).html('Key có tồn tại trong Object');
			return;
		} else {
			$('.spn-result').eq(7).html('Key không tồn tại trong Object');
		}
	}
}

$('.btn-result').eq(8).click(function() {
	checkLength(user);
});

function checkLength(obj) {
	var long = Object.keys(obj).length;
	$('.spn-result').eq(8).html('Độ dài của Object là: ' + long);
}

$('.btn-result').eq(9).click(function() {
	getUser(userArr);
});

function getUser(_array) {
	var arr = [];
	for (var i = 0; i < _array.length; i ++) {
		if (_array[i].age > 25 && _array[i].isStatus === true) {
			arr.push(_array[i]);
		}
	}
	console.log(arr);
	$('.spn-result').eq(9).html('Danh sách cần tìm là: ' + JSON.stringify(arr));
}

$('.btn-result').eq(10).click(function() {
	sortUser(userArr);
});

function sortUser(arr) {
	var a = {};
	console.log(arr[0].age > arr[1].age);
	for (var i = 0; i < arr.length - 1; i ++) {
		for (var j = i + 1; j < arr.length; j ++) {
			if (arr[i].age > arr[j].age) {
				a = arr[i];
				arr[i] = arr[j];
				arr[j] = a;
			}
		}
		
	}
	$('.spn-result').eq(10).html('Danh sách cần tìm là: ' + JSON.stringify(arr));
}




























