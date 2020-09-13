
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
	var reverse = abc[0].split('').reverse().join('');
	console.log(reverse);
	document.getElementsByClassName('result')[7].innerHTML = (abc[0] === reverse);
}




