
// Bai 1
function todayIs() {
	let now = new Date();
	let day = now.getDate();
	let month = now.getMonth();
	let year = now.getFullYear();
	let today = 'today is: ' + day.toString().padStart(2, 0) + '/' + (month + 1).toString().padStart(2, 0) + '/' + year.toString();
	return today;
}

document.getElementsByClassName('btn-result')[0].addEventListener('click', () => {
	document.getElementsByClassName('pre-result')[0].innerHTML = todayIs();
});

document.getElementsByClassName('pre-program')[0].innerHTML = todayIs;

// Bai 2
let month = document.getElementsByClassName('form-control')[0].value;
let clicked = false;
document.getElementsByClassName('btn-outline-secondary')[0].addEventListener('click', () => {
	month = document.getElementsByClassName('form-control')[0].value;
	clicked = true;
});

function getDay(month) {
	if (clicked == false) {
		return 'Chưa con firm';
	} else if (clicked == true && month === '') {
		clicked = false;
		return 'Chưa nhập tháng';
	} else if (clicked == true && month > 12 || month < 1 || Number.isInteger(parseInt(month)) === false) {
		clicked = false;
		return 'Nhập sai tháng';
	} else {
		clicked = false;
		let thisMonth = new Date(2020, month, 0);
		let day = thisMonth.getDate();
		return 'Số ngày trong tháng là: ' + day;
	}
}

document.getElementsByClassName('btn-result')[1].addEventListener('click', () => {
	document.getElementsByClassName('pre-result')[1].innerHTML = getDay(month);
});

document.getElementsByClassName('pre-program')[1].innerHTML = getDay;

// Bai 3
let clicked_l2 = false;
let day = document.getElementsByClassName('form-control')[1].value;
document.getElementsByClassName('btn-outline-secondary')[1].addEventListener('click', () => {
	day = document.getElementsByClassName('form-control')[1].value;
	clicked_l2 = true;
});
function checkDay(day) {
	if (clicked_l2 == false) {
		return 'Chưa con firm';
	} else if (clicked_l2 == true && day === '') {
		clicked_l2 = false;
		return 'Chưa nhập ngày';
	} else if (clicked_l2 == true && day < 1 || day > 31 || Number.isInteger(parseInt(day)) === false) {
		return 'Nhập sai ngày';
	} else {
		let thisMonth = new Date(2020, 9, day);
		let isWeekend = thisMonth.getDay();
		console.log(isWeekend);
		if (isWeekend == 0) {
			return ' Là ngày cuối tuần (Chủ nhật)';
		} else {
			return 'Không là ngày cuối tuần';
		}
	}
}

document.getElementsByClassName('btn-result')[2].addEventListener('click', () => {
	document.getElementsByClassName('pre-result')[2].innerHTML = checkDay(day);
});

document.getElementsByClassName('pre-program')[2].innerHTML = checkDay;

//Bai 4
let clicked_l3 = false;
let mins = document.getElementsByClassName('form-control')[2].value;
document.getElementsByClassName('btn-outline-secondary')[2].addEventListener('click', () => {
	mins = document.getElementsByClassName('form-control')[2].value;
	clicked_l3 = true;
});
function convertmins(mins) {
	if (clicked_l3 == false) {
		return 'Chưa confirm';
	} else if (clicked_l3 == true && mins === '') {
		clicked_l3 = false;
		return 'Chưa nhập phút';
	} else if (clicked_l3 == true && mins < 0 || mins > 1440 || Number.isInteger(parseInt(mins)) === false) {
		return 'Nhập sai phút';
	} else {
		let hour = Math.floor(mins/60);
		let rm_mins = mins - hour * 60;
		return 'Time is: ' + hour.toString().padStart(2, 0) + ':' + rm_mins.toString().padStart(2, 0);
	}
}

document.getElementsByClassName('btn-result')[3].addEventListener('click', () => {
	document.getElementsByClassName('pre-result')[3].innerHTML = convertmins(mins);
});

document.getElementsByClassName('pre-program')[3].innerHTML = convertmins;

// Bai 5
function countDays() {
	let today = new Date();
	let begin = new Date(2020, 0, 1);
	let distance = today - begin;
	let days = Math.floor(distance/(1000*60*60*24));
	return days + ' ngày';
} 

document.getElementsByClassName('btn-result')[4].addEventListener('click', () => {
	document.getElementsByClassName('pre-result')[4].innerHTML = countDays();
});

document.getElementsByClassName('pre-program')[4].innerHTML = countDays;

//Bai 6
let clicked_l4 = false;
let born = document.getElementsByClassName('form-control')[3].value;
document.getElementsByClassName('btn-outline-secondary')[3].addEventListener('click', () => {
	born = document.getElementsByClassName('form-control')[3].value;
	clicked_l4 = true;
});

function find_age(_born) {
	if (clicked_l4 == false) {
		return 'Chưa confirm';
	} else {
		clicked_l4 = false;
		console.log(_born);
		let day = _born.split('-')[2];
		let month = _born.split('-')[1];
		let year = _born.split('-')[0];
		console.log(_born.split('/'));
		if (parseInt(day) == 0 || parseInt(month) == 0 || parseInt(year) == 0 || _born == '') {
			return 'Chưa nhập ngày sinh';
		} else {
			let bornTime = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
			let today = new Date();
			let distance = today - bornTime;
			let age = Math.floor(distance/(1000*60*60*24*365));
			return age + ' tuổi';
		}
	}
}

document.getElementsByClassName('btn-result')[5].addEventListener('click', () => {
	document.getElementsByClassName('pre-result')[5].innerHTML = find_age(born);
});

document.getElementsByClassName('pre-program')[5].innerHTML = find_age;

//Bai 7
function beginofWeek() {
	let varDate = new Date();
	let today = varDate.getDate();
	let month = varDate.getMonth();
	let year = varDate.getFullYear();
	let indexDay = varDate.getDay();
	console.log(today);
	console.log(indexDay);
	let beginDay;
	if (indexDay < 1) {
		beginDay = today + 1;
	} else if (indexDay >=1 && indexDay < 7){
		beginDay = today - (indexDay - 1);
	}
	return 'Ngày đầu tuần là: ' + new Date(year, month, beginDay);
}

document.getElementsByClassName('btn-result')[6].addEventListener('click', () => {
	document.getElementsByClassName('pre-result')[6].innerHTML = beginofWeek();
});

document.getElementsByClassName('pre-program')[6].innerHTML = beginofWeek;

//Bai 8
function endofMonth() {
	let month = 9;
	let today = new Date(2020, month + 1, 0);
	return today;

}

document.getElementsByClassName('btn-result')[7].addEventListener('click', () => {
	document.getElementsByClassName('pre-result')[7].innerHTML = endofMonth();
});

document.getElementsByClassName('pre-program')[7].innerHTML = endofMonth;

//Bai 9
function countDown() {
	let lunar = new Date(2021, 0, 1);
	let today = new Date();
	let time = lunar - today;
	let day = Math.floor(time / (1000 * 60 * 60 * 24));
	let hour = Math.floor(time % (1000 * 60 *60 * 24) / (1000 * 60 * 60));
	let	min = Math.floor(time % (1000* 60 * 60) / (1000 * 60));
	let second = Math.floor(time % (1000 * 60) / 1000);
	let result = 'CountDown to Luna new year: ' + day.toString() + 'd ' + hour.toString().padStart(2, 0) + 'h ' + min.toString().padStart(2, 0) + 'm ' + second.toString().padStart(2, 0) + 's'; 
	return result; 

}

document.getElementsByClassName('btn-result')[8].addEventListener('click', () => {
	document.getElementsByClassName('pre-result')[8].innerHTML = countDown();
});

document.getElementsByClassName('pre-program')[8].innerHTML = countDown;

//Bai 10

let clicked_hour = false;
let clicked_min = false;
let clicked_second = false;
let	hour = document.getElementsByClassName('form-control')[4].value;
let min = document.getElementsByClassName('form-control')[5].value;
let second = document.getElementsByClassName('form-control')[6].value;
let delta = document.getElementsByClassName('form-control')[7].value;
document.getElementsByClassName('btn-outline-secondary')[4].addEventListener('click', () => {
	hour = document.getElementsByClassName('form-control')[4].value;
	clicked_hour = true;
});
document.getElementsByClassName('btn-outline-secondary')[5].addEventListener('click', () => {
	min = document.getElementsByClassName('form-control')[5].value;
	clicked_min = true;
});
document.getElementsByClassName('btn-outline-secondary')[6].addEventListener('click', () => {
	second = document.getElementsByClassName('form-control')[6].value;
	clicked_second = true;
});
document.getElementsByClassName('btn-outline-secondary')[7].addEventListener('click', () => {
	delta = document.getElementsByClassName('form-control')[7].value;
	clicked_second = true;
});
function timing() {
	if (clicked_hour == false || clicked_min == false || clicked_second == false) {
		return 'Chưa confirm';
	} else if (clicked_hour == true && clicked_min == true && clicked_second == true && (hour < 0 || hour > 24 || min < 0 || min > 60 ||  second < 0 || second > 60 || delta > 1000 || delta < 0)) {
		clicked_hour = false;
		clicked_min = false;
		clicked_second = false;
		return 'Nhập sai';
	} else {
		clicked_hour = false;
		clicked_min = false;
		clicked_second = false;
		if (parseInt(hour) == 0 || parseInt(min) == 0 || parseInt(second) == 0) {
			return 'Chưa nhập đủ dữ liệu';
		} else {
			let time = hour * (60 * 60 * 1000) + min * (60 * 1000) + second * 1000;
			console.log(time);
			let after = time + delta * 1000;
			console.log(after);
			let _hour = Math.floor(after / (1000 * 60 * 60));
			let _min = Math.floor(after % (1000 * 60 * 60) / (1000 * 60));
			let _second = Math.floor(after % (1000 * 60) / 1000);
			let result = 'Time is: ' + _hour + 'h ' + _min + 'm ' + _second + 's';
			return result;
		}
	}
}

document.getElementsByClassName('btn-result')[9].addEventListener('click', () => {
	document.getElementsByClassName('pre-result')[9].innerHTML = timing();
});

document.getElementsByClassName('pre-program')[9].innerHTML = timing;
















