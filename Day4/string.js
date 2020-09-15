
 var arrStr = [];
 var index = null;
 function getData() {
 	var string1 = document.getElementById('input1').value;
	var string2 = document.getElementById('input2').value;
	arrStr.push(string1, string2);
}

function checkStringExist(array) {
	if (array !== undefined) {
		if (array[0].includes(array[1]) === true) {
			document.getElementsByClassName('result')[0].innerHTML = true;
		} else {
			document.getElementsByClassName('result')[0].innerHTML = false;
		}
	}
	else return;
}

function shortenString(array) {
	var sliceStr = array[0].slice(0,8) + '...';
	document.getElementsByClassName('result')[1].innerHTML = sliceStr;
}

function capitalizeString(array) {
	var splitStr = array[0].split(' ');
	for (var i = 0; i < splitStr.length; i++) {
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}
	document.getElementsByClassName('result')[2].innerHTML = splitStr.join(' ');
}

function repeatString(array) {
	 document.getElementsByClassName('result')[3].innerHTML = array[0].repeat(10);
}

function repeatString2(array) {
	var newArr = [];
	for (var i = 0; i < 10; i ++) {
		newArr.push(array[0]);
	}
	document.getElementsByClassName('result')[4].innerHTML = newArr.join('-');
}

function checkNumber() {
	var indexNum = document.getElementById('index').value;
	if (indexNum < 1 || (isNaN(indexNum) === true)) {
		document.getElementById('result_check').innerHTML = 'Nhap sai kieu cua Number, hay nhap lai';
	} else {
		document.getElementById('result_check').innerHTML = 'So da nhap hop le';
		index = indexNum;
	}
}

function repeatString3(array, num) {
	var storeArr = [];
	for (i = 0; i < num; i ++) {
		storeArr.push(array[0]);
	}
	document.getElementsByClassName('result')[5].innerHTML = storeArr.join('-');
}

function reverseString(array) {
	var convertStr = array[0].toString();
	var convertArr = convertStr.split('');
	document.getElementsByClassName('result')[6].innerHTML = 'Chuỗi đảo ngược là: ' + convertArr.reverse().join('').toString();
}

function checkReverse(abc) {
	var convertStr = abc[0].split(' ').join('').toString().toLowerCase();
	var reverse = convertStr.split('').reverse().join('').toString();
	document.getElementsByClassName('result')[7].innerHTML = (convertStr === reverse);
}
 
function minNumbers() {
	var numb1 = document.getElementsByClassName('array')[0].value;
	var numb2 = document.getElementsByClassName('array')[1].value;
	var numb3 = document.getElementsByClassName('array')[2].value;
	var numbArray = [numb1, numb2, numb3];
	if (isNaN(numb1) === true || isNaN(numb2) === true || isNaN(numb3) === true) {
		document.getElementsByClassName('result')[8].innerHTML = 'Bạn nhập sai, vui lòng nhập lại';
		return;
	} else {
		document.getElementsByClassName('result')[8].innerHTML = 'Số nhỏ nhất là: ' + Math.min(...numbArray);
	}
}

function max2Number() {
	var arr = document.querySelectorAll('.child');
	var number = [];
	for (var i = 0; i < arr.length; i ++) {
		if (isNaN(arr[i]).value === true) {
			document.getElementsByClassName('result')[9].innerHTML = 'Bạn nhập sai, vui lòng nhập lại';
			return;
		} else {
			for (i = 0; i < arr.length; i++) {
				number.push(parseInt(arr[i].value));
			}
			var max = Math.max(...number);
			var result = 0;
			var sub = [];
			for (i = 0; i < number.length; i ++) {
				result = max - number[i];
				if(result !==0) {
					sub.push(result);
				}
			}
		}
		console.log(sub);
		document.getElementsByClassName('result')[9].innerHTML = 'Số lớn thứ nhì là: ' + (max - Math.min(...sub));
	}
}

function sortStudents() {
	var name1 = document.getElementsByClassName('name')[0].value;
	var name2 = document.getElementsByClassName('name')[1].value;
	var name3 = document.getElementsByClassName('name')[2].value;
	var nameArr = [name1, name2, name3];
	if (isNaN(name1) === false || isNaN(name2) === false || isNaN(name3) === false) {
		document.getElementsByClassName('result')[10].innerHTML = 'Bạn nhập sai, vui lòng nhập lại';
		return;
	} else {
		document.getElementsByClassName('result')[10].innerHTML =  nameArr.sort().reverse();
	}
}

function sumResult() {
	var sum = 0;
	for (var i = 0; i < 101; i ++) {
		if (i % 5 == 0) {
			sum = sum + i;
		}
	}
	document.getElementsByClassName('result')[11].innerHTML =  'Tong cac so chia het cho 5 tu 0 den 100 la: ' + sum;
}
var oldArr =[];
function getArr() {
	var arrtopush = [];
	for (var i = 0; i < document.querySelectorAll('.number').length; i ++) {
		if (isNaN(document.querySelectorAll('.number')[i].value) === false) {
			arrtopush.push(document.querySelectorAll('.number')[i].value);
		} else {
			document.getElementById('checkInput').innerHTML = 'Ban nhap sai, moi nhap lai';
			return
		}
	}
	oldArr = [...arrtopush];
}

function newArray(_oldArr) {
	var newArr =[];
	
	for (var i = 0; i < _oldArr.length; i++) {
		newArr.push(_oldArr[i] % 2);
	}
	document.getElementsByClassName('result')[12].innerHTML = 'Mảng mới sau khi lấy mảng cũ chia 2 lấy dư là: ' + newArr;
}

var originArr = [];
function getStrings() {
	var arrtopush = [];
	for (var i = 0; i < document.querySelectorAll('.string').length; i ++) {
		if (isNaN(document.querySelectorAll('.string')[i].value) === true) {
			arrtopush.push(document.querySelectorAll('.string')[i].value);
		} else {
			document.getElementById('checkCondition').innerHTML = 'Ban nhap sai, moi nhap lai';
			return;
		}
	}
	originArr = [...arrtopush];
}

function sortArr(_originArr) {
	var max_char = 0;
	var arrtopush = [];
	for (var i = 0; i < _originArr.length; i++) {
		if (max_char < _originArr[i].length) {
			max_char = originArr[i].length;
		}
	}
	console.log(max_char);
	for (var j = 0; j < _originArr.length; j++) {
		if (_originArr[j].length === max_char) {
			arrtopush.push(_originArr[j]);
		}
	}
	document.getElementsByClassName('result')[13].innerHTML = 'Cac phan tu co do dai lon nhat la: ' + arrtopush;
}





