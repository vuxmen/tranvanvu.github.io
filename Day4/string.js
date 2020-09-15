
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

function reverseString(a) {
	var afterSplit = a[0].split(' ');
	afterSplit.reverse();
	document.getElementsByClassName('result')[6].innerHTML = afterSplit.join(' ');
}

function checkReverse(abc) {
	var reverse = abc[0].toLowerCase().split().reverse().join();
	console.log(reverse);
	document.getElementsByClassName('result')[7].innerHTML = (abc[0].toLowerCase() === reverse);
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
	var numb3 = document.getElementsByClassName('array')[3].value;
	var numb4 = document.getElementsByClassName('array')[4].value;
	var numb5 = document.getElementsByClassName('array')[5].value;
	var numbArray2 = [numb3, numb4, numb5];
	if (isNaN(numb3) === true || isNaN(numb4) === true || isNaN(numb5) === true) {
		document.getElementsByClassName('result')[9].innerHTML = 'Bạn nhập sai, vui lòng nhập lại';
		return;
	} else {
		var i = numbArray2.indexOf(Math.max(...numbArray2));
		numbArray2.splice(i, 1);
		document.getElementsByClassName('result')[9].innerHTML = 'Số lớn thứ nhì là: ' + Math.max(...numbArray2);
	}
}

function sortStudents() {
	var name1 = document.getElementsByClassName('array')[6].value;
	var name2 = document.getElementsByClassName('array')[7].value;
	var name3 = document.getElementsByClassName('array')[8].value;
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

















