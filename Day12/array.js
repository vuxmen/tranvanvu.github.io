var l1_arr = [
		1,
		null,
		{
			name: 'Imac',
			monitor: '24inch',
			prize: 400000000
		},
		['Apple', 2020, 'iphone12']
	];

var l2_arr = [
		null,
		{
			name: 'Macbook Pro',
			monitor: '15inch',
			prize: 35000000
		},
		['Apple', 2020, 'iphone12']
	];

var l3_arr = [
		'10',
		['Sony', 2020, 'PS5'],
		{
			name: 'PS5',
			gamepad: 'dualshock',
			prize: 15000000
		},
		['Sony', 2020, 'PS5'],
		10
	];

var l4_arr = [
		['Sony', 2020, 'PS5'],
		10,
		{
			prize: 15000000,
			name: 'PS5',
			gamepad: 'dualshock'
			
		},
		10
	];	

var l5_arr = [
		10,
		'jquery',
		{
			type: 'front-end',
			foundation: 'js',
		},
		['open-source', 2020],
		true,
		10
	];

var l6_arr = [
		'nodeJs',
		10,
		['open-source', 2020],
		{
			type: 'back-end',
			foundation: 'js',
		},
		'10',
		10,
		true
	];	
var hex = '0123456789ABCDEF';

var string = 'Tech';

var l8_arr = [1, 2, 4, 6];

var l9_arr = [5, 3, 1, 0];

var integer = 9601;

var l12_arr = ['Im learning', 'She does either', 123, '123', 'She does either', 123];

var l13_arr = ['web front-end', 'JavaScript', 4.0, 'back-end', 4.0, 'JavaScript'];

var l14_arr = ['ReactJS', 'JS'];

var l15_arr = [40, 35, 70, 30, 20, 10];
var numb = 30;

var l16_arr = ['Tech Master', 2020, 'Foundation 6', 'Canvas', 'HTML DOM', 'Quizz'];
var quantity = 2;
//Truyền array vào html
$('.pre-array').eq(0).html(JSON.stringify(l1_arr)); 
$('.pre-array').eq(1).html(JSON.stringify(l2_arr)); 
$('.pre-array').eq(2).html(JSON.stringify(l3_arr)); 
$('.pre-array').eq(3).html(JSON.stringify(l4_arr));
$('.pre-array').eq(4).html(JSON.stringify(l5_arr));
$('.pre-array').eq(5).html(JSON.stringify(l6_arr));
$('.pre-array').eq(6).html(JSON.stringify(l5_arr));
$('.pre-array').eq(7).html(JSON.stringify(l6_arr));
$('.pre-array').eq(8).html(JSON.stringify(string));
$('.pre-array').eq(9).html(JSON.stringify(l8_arr));
$('.pre-array').eq(10).html(JSON.stringify(l9_arr));
$('.pre-array').eq(11).html(JSON.stringify(integer));
$('.pre-array').eq(12).html(JSON.stringify(l12_arr));
$('.pre-array').eq(13).html(JSON.stringify(l13_arr));
$('.pre-array').eq(14).html(JSON.stringify(l14_arr));
$('.pre-array').eq(15).html(JSON.stringify(l15_arr));
$('.pre-array').eq(16).html(JSON.stringify(numb));
$('.pre-array').eq(17).html(JSON.stringify(l16_arr));
$('.pre-array').eq(18).html(JSON.stringify(quantity));

// Bài 1: Lấy 1 phần tử ngẫu nhiên của mảng array
$('.btn-result').eq(0).click(function() {
	$('.pre-result').eq(0).html('Phần tử ngẫu nhiên trong mảng là: ' + rd_element(l1_arr)); 
});

function rd_element(arr) {
	var random = arr[Math.floor(Math.random() * arr.length)];
	if (typeof random === 'object') {
		return JSON.stringify(random);
	} else return random;
}
$('.pre-program').eq(0).html(rd_element.toString());

// Bài 2: Hoán đổi random vị trí các phần tử của mảng
$('.btn-result').eq(1).click(function() {
	$('.pre-result').eq(1).html('Mảng sau khi random vị trí là:  ' + rd_position(l2_arr)); 
});

function rd_position(arr) {
	var j, store;
	for (var i = arr.length - 1; i > 0; i --) {
		j = Math.floor(Math.random() * (i + 1));
			store = arr[i];
			arr[i] = arr[j];
			arr[j] = store; 
	}
	return JSON.stringify(arr);
}

$('.pre-program').eq(1).html(rd_position.toString());

//Bài 3: Viết chương trình JavaScript để lấy một mảng các phần tử xuất hiện trong cả hai mảng
$('.btn-result').eq(2).one('click', function() {
	$('.pre-result').eq(2).html('Mảng các phần tử xuất hiện trong cả 2 mảng là:  ' + JSON.stringify(sameEl(l3_arr, l4_arr))); 
});

function sameEl(arr1, arr2) {
	var sameArr = [];
	for (var m = 0; m < arr1.length ; m ++) {
		for (var n = m + 1; n < arr1.length; n ++) {
			if (JSON.stringify(arr1[m]) === JSON.stringify(arr1[n])) {
				arr1.splice(m, 1);
				m = m - 1;
				continue;
			}
		}
	}
	for (var a = 0; a < arr2.length; a ++) {
		for (var b = a + 1; b < arr2.length; b ++) {
			if (JSON.stringify(arr2[a]) === JSON.stringify(arr2[b])) {
				arr2.splice(a, 1);
				a = a - 1;
				continue;
			}
		}
	}
	for (var i = 0; i < arr2.length; i ++) {
		arr1.push(arr2[i]);
	}
	for (var j = 0; j < arr1.length - 1; j ++) {
		for (var k = j + 1; k < arr1.length; k ++) {
			if (JSON.stringify(arr1[j]) === JSON.stringify(arr1[k])) {
				sameArr.push(arr1[k]);
			}
		}
	}
	return sameArr;
}

$('.pre-program').eq(2).html(sameEl.toString());

// Bài 4: Viết chương trình lấy số phần tử không xuất hiện ở 2 mảng
$('.btn-result').eq(3).one('click', function() {
	$('.pre-result').eq(3).html('Mảng các phần tử không xuất hiện trong cả 2 mảng là:  ' + JSON.stringify(diffEl(l5_arr, l6_arr))); 
});

function diffEl(arr1, arr2) {
	for (var m = 0; m < arr1.length; m ++) {
		for (var n = m + 1; n < arr1.length; n ++) {
			if (JSON.stringify(arr1[m]) === JSON.stringify(arr1[n])) {
				arr1.splice(m, 1);
				m = m -1;
				continue;
			}
		}
	}
	for (var a = 0; a < arr2.length; a ++) {
		for (var b = a + 1; b < arr2.length; b ++) {
			if (JSON.stringify(arr2[a]) === JSON.stringify(arr2[b])) {
				arr2.splice(a, 1);
				a = a -1;
				continue;
			}
		}
	}
	for (var i = 0; i < arr2.length; i ++) {
		arr1.push(arr2[i]);
	}
	for (var j = 0; j < arr1.length - 1; j ++) {
		for (var k = j + 1; k < arr1.length; k ++) {
			if (JSON.stringify((arr1[j])) === JSON.stringify(arr1[k])) {
				arr1.splice(j,1);
				arr1.splice(k-1,1);
				j = j - 1;
			} 
		}
	}
	return arr1;
}

$('.pre-program').eq(3).html(diffEl.toString());

// Bài 5: Viết chương trình lấy tất cả các phần tử không trùng nhau của 2 mảng
$('.btn-result').eq(4).one('click', function() {
	$('.pre-result').eq(4).html('Mảng các phần tử không trùng nhau của 2 mảng là:  ' + JSON.stringify(mergeEl(l5_arr, l6_arr))); 
});

function mergeEl(arr1, arr2) {
	for (var m = 0; m < arr1.length; m ++) {
		for (var n = m + 1; n < arr1.length; n ++) {
			if (JSON.stringify(arr1[m]) === JSON.stringify(arr1[n])) {
				arr1.splice(m, 1);
				m = m -1;
				continue;
			}
		}
	}
	for (var a = 0; a < arr2.length; a ++) {
		for (var b = a + 1; b < arr2.length; b ++) {
			if (JSON.stringify(arr2[a]) === JSON.stringify(arr2[b])) {
				arr2.splice(a, 1);
				a = a -1;
				continue;
			}
		}
	}
	for (var i = 0; i < arr2.length; i ++) {
		arr1.push(arr2[i]);
	}
	for (var j = 0; j < arr1.length; j ++) {
		for (var k = j + 1; k < arr1.length; k ++) {
			if (JSON.stringify(arr1[j]) === JSON.stringify(arr1[k])) {
				arr1.splice(j,1);
				j = j - 1;
			} 
		}
	}
	return arr1;
}

$('.pre-program').eq(4).html(mergeEl.toString());

// Bài 6: Viết chương trình tạo mã màu HEX ngẫu nhiên
$('.btn-result').eq(5).click(function(){
	$('.pre-result').eq(5).html('Mã màu HEX random là: ' + color(hex));
});

function color(_hex) {
	var symbol = "#";
	for (var i = 0; i < 6 ; i ++) {
		symbol += _hex[Math.floor(Math.random() * 16)];
	}
	return symbol;
}

$('.pre-program').eq(5).html(color.toString());

// Bài 7: Viết một chương trình JavaScript trả về một tập hợp con của một chuỗi
$('.btn-result').eq(6).click(function() {
	$('.pre-result').eq(6).html('Tập con của chuỗi là: ' + strChild(string));
});

function strChild(str) {
	var spl = str.split('');
	var arr = [];
	for (var i = 0; i < spl.length; i ++) {
		for (var j = i + 1; j < spl.length + 1; j ++) {
			arr.push(spl.slice(i, j).join(''));
		}
	}
	return arr;
}

$('.pre-program').eq(6).html(strChild.toString());
// Standard Way (Cách 2: Dùng đệ quy)
// $('.btn-result').eq(6).click(function(){
// 	$('.pre-result').eq(6).html('Tập con của chuỗi là : ' + str_child(string.split('')).map(function(str){
// 		return str.join('');
// 	}));
// });

// function str_child(array) {
// 	var branch = [];
// 	if (array.length == 1) return array;
// 	for (var k in array) {
// 		var child = array[k];
// 		str_child(array.join('').replace(child, '').split('')).concat('').map(function(sub) {
// 			branch.push([child].concat(sub));
// 		});
// 	}
// 	return branch;
// }

// $('.pre-program').eq(6).html(str_child.toString());

// Bài 8: Kiểm tra mảng tăng dần
$('.btn-result').eq(7).one('click', function() {
	$('.pre-result').eq(7).html('Mảng ' + checkIncrease(l8_arr) + 'tăng dần');
})

function checkIncrease(arr) {
	for (var i = 0; i < arr.length; i ++) {
		for (j = i + 1; j < arr.length + 1; j ++) {
			if (arr[i] > arr[j]) return 'KHÔNG ';
		}
	}
	return 'CÓ ';
}

$('.pre-program').eq(7).html(checkIncrease.toString());

// Bài 9: Kiểm tra mảng xem có phải mảng số lẻ giảm dần hay không
$('.btn-result').eq(8).one('click', function() {
	$('.pre-result').eq(8).html('Mảng ' + checkDecrease(l9_arr) + 'giảm dần');
})

function checkDecrease(arr) {
	for (var i in arr) {
		for (var j = i + 1; j < arr.length + 1; j ++) {
			if (typeof arr[i] === 'number' && typeof arr[j] === 'number' && arr[i] % 2 !== 0 && arr[j] % 2 !== 0 && arr[i] > arr[j]) return 'CÓ ';
		}
	}
	return 'KHÔNG ';
}

$('.pre-program').eq(8).html(checkDecrease.toString());

// Bài 10: Cho 1 số nguyên, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên)
$('.btn-result').eq(9).one('click', function() {
	$('.pre-result').eq(9).html('Số sau khi sắp xếp là: ' + sortNumb(integer));
});

function sortNumb(number) {
	var arrNumb = number.toString().split('');
	var store;
	console.log(arrNumb);
	for (var i = 0; i < arrNumb.length - 1; i ++) {
		for (var j = i + 1; j < arrNumb.length; j ++) {
			if (arrNumb[i] > arrNumb[j]) {
				store = arrNumb[i];
				arrNumb[i] = arrNumb[j];
				arrNumb[j] = store;
			}
		}
	}
	if (arrNumb[0] === '0') {
		arrNumb.splice(2, 0, '0');
		arrNumb.splice(0, 1);
	}
	return arrNumb.join('');
}

$('.pre-program').eq(9).html(sortNumb.toString());

// Bài 11: Random mã màu RGB
$('.btn-result').eq(10).click(function() {
	$('.pre-result').eq(10).html('Mã màu RGB random là: ' + rgbrandom());
}); 

function rgbrandom() {
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	return 'rgb(' + x + ', ' + y + ', ' + z + ')'; 
}

$('.pre-program').eq(10).html(rgbrandom.toString());

// Bài 12: Remove những phần tử trùng nhau trong mảng
$('.btn-result').eq(11).click(function(){
	$('.pre-result').eq(11).html('Phần tử sau khi remove là: ' + remove(l12_arr));
});

function remove(arr) {
	for (var i = 0; i < arr.length - 1; i ++) {
		for ( var j = i + 1; j < arr.length; j ++) {
			if (arr[i] === arr[j]) {
				arr.splice(i, 1);
				arr.splice(j - 1, 1);
				i = i - 1;
			}
		}
	}
	return JSON.stringify(arr);
}

$('.pre-program').eq(11).html(remove.toString());

// Bài 13: Tìm các giá trị trùng lặp trong 1 mảng
$('.btn-result').eq(12).click(function(){
	$('.pre-result').eq(12).html('Phần tử trùng lặp trong mảng là: ' + equal(l13_arr));
});

function equal(arr) {
	var branch = [];
	for (var i = 0; i < arr.length - 1; i ++) {
		for ( var j = i + 1; j < arr.length; j ++) {
			if (JSON.stringify(arr[i]) === JSON.stringify(arr[j])) {
				branch.push(arr[i]);
			}
		}
	}
	return JSON.stringify(branch);
}

$('.pre-program').eq(12).html(equal.toString());

// Bài 14: Viết function trả về true nếu chuỗi trong phần tử đầu tiên của mảng chứa tất cả các chữ cái của chuỗi trong phần tử thứ hai của mảng.
$('.btn-result').eq(13).click(function() {
	$('.pre-result').eq(13).html('Kết quả trả về: ' + check(l14_arr));
});

function check(arr) {
	if (arr[0].includes(arr[1]) === true) {
		return true;
	}
 }

$('.pre-program').eq(13).html(check.toString());

// Bài 15: Trả về chỉ số thấp nhất mà tại đó giá trị (đối số thứ hai) sẽ được chèn vào một mảng (đối số đầu tiên) khi nó đã được sắp xếp. Giá trị trả về phải là một số

$('.btn-result').eq(14).click(function() {
	$('.pre-result').eq(14).html('Chỉ số thấp nhất là: ' + lowest(l15_arr, numb))
});

function lowest(arr, numb) {
	arr.push(numb);
	var store; 
	var index;
	for (var i = 0; i < arr.length - 1; i ++) {
		for (var j = i + 1; j < arr.length; j ++) {
			if (arr[i] > arr[j]) {
				store = arr[i];
				arr[i] = arr[j];
				arr[j] = store;
			}
 		}
	}
	for (var k = 0; k < arr.length; k ++) {
		if (arr[k] === numb) {
			index = k;
			break;
		}
	}
	return index;
}

$('.pre-program').eq(14).html(lowest.toString());

/// Bài 16:  Viết function chia mảng thành các mảng con có độ dài bằng kích thước (đối số thứ hai) và trả về chúng dưới dạng mảng hai chiều
$('.btn-result').eq(15).click(function() {
	$('.pre-result').eq(15).html('Mảng 2 chiều là: ' + newArray(l16_arr, quantity));
});

function newArray(arr, quantity) {
	var begin = [];
	var newArr = [];
	for (var i = 0; i <= quantity; i ++) {
		begin.push(arr[i]);
		arr.splice(i, 1);
		i = i - 1;
		quantity = quantity - 1;
	}
	newArr.push(begin);
	newArr.push(arr);
	console.log(newArr);
	return JSON.stringify(newArr);
}

$('.pre-program').eq(15).html(newArray.toString());


var a = 10;
var x = a; 
console.log(x);
 a = 5; 
 console.log(x);
 console.log(a);
 var m = [];
 m.push(1);
 console.log(m);
var person = {
	name: 'vu',
	age: 20
};

var girl = {
	name: 'elli',
	age: 30
}
girl = person;

person.name = 'online';
girl.name = 'shara';
console.log(person);

console.log(1 < 2 < 3);














