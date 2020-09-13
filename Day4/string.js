
 var arrStr = [];
 function getData() {
 	var string1 = document.getElementById('input1').value;
	var string2 = document.getElementById('input2').value;
	arrStr.push(string1, string2);
};

function checkStringExist(array) {
	if (array !== undefined) {
		if (array[0].includes(array[1]) === true) {
			document.getElementsByClassName('result')[0].innerHTML = true;
		} else {
			document.getElementsByClassName('result')[0].innerHTML = false;
		}
	}
	else return;
};



	

//Bai 2
// var thirdStr = 'Xin chao cac ban!'
// function shortenString(_string) {
// 	return _string.slice(0,8) + '...';
// }
// document.getElementById('button2').addEventListener('click', function() {
// 	document.getElementsByClassName('result')[1].innerHTML = shortenString(thirdStr);
// });
// //Bai 3
// var fourthStr = 'linux networking, database';
// function upperCaseFunc(_fourthStr) {
// 	var splitStr = _fourthStr.split(' ');
// 	for (var i = 0; i < splitStr.length; i++) {
// 		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
// 	}
// 	return splitStr.join(' ');
// }
// document.getElementById('button3').addEventListener('click', function() {
// 	document.getElementsByClassName('result')[2].innerHTML = upperCaseFunc(fourthStr);
// });
// //Bai 4
// var _5stStr = 'sao chep ';
// function copy10times(string) {
// 	return string.repeat(10);
// }
// document.getElementById('button4').addEventListener('click', function() {
// 	document.getElementsByClassName('result')[3].innerHTML = copy10times(_5stStr);
// });
// //Bai 5
