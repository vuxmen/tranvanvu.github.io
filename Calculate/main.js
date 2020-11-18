
let chars = document.getElementsByClassName('num-input');
let ex = document.querySelector('.c-ex');
let result = document.querySelector('.c-result');
let enter = document.querySelector('.enter');
let sqr = document.querySelector('.sqrt');
let del = document.querySelector('.del');
let clear = document.querySelector('.clear');
let swit = document.querySelector('.switch');
let checkbox = document.getElementById('toggle-handle');
let output = 0;
let input = '';
let check = false;
let count = 0;
let isNumb = false;
let arr = [];
for (let i = 0; i < 10; i ++) {
	arr.push(i);
}

function caseInnerText(element) {
	switch (element.innerText) {
		case '×': 
			input += ' * ';
			break;
		case '÷':
			input += ' / ';
			break;
		case '+':
			input += ' + ';
			break;
		case '−':
			input += ' - ';
			break;
		case '%':
			input += ' % ';
			break;
		case '∙':
			input += '.';
			break;
		default:
			input += element.innerText;
	}

	
	if (element.innerText == '∙') {
		ex.innerText += '.';
	} else {
		ex.innerText += element.innerText;
	}
}

[...chars].forEach(element => {
	element.addEventListener('click', () => {
		if (check == true && count == 0) {
			for (let i = 0; i < arr.length; i ++) {
				if (element.innerText == arr[i].toString()) {
					isNumb = true;
					input = '';
					ex.innerText = '';
					break
				} 
			}
			
			if (isNumb == false) {
				input = result.innerText;
				ex.innerText = result.innerText;
			}
		} 
		isNumb = false;

		caseInnerText(element);
		count ++;
		
	});
});

enter.addEventListener('click', () => {
	console.log(input);
	output = eval(input).toFixed(1);
	result.innerText = output.toString();
	check = true;
	count = 0;
});

sqr.addEventListener('click', () => {
	output = Math.sqrt(eval(input)).toFixed(3);
	result.innerText = output.toString();
	check = true;
	count = 0;
});

del.addEventListener('click', () => {
	if (input.length > 0) {
		ex.innerText = ex.innerText.substring(0, ex.innerText.length - 1);
		input = input.substring(0, input.length - 1);
		output = eval(input).toFixed(1);
	} else return
});

clear.addEventListener('click', () => {
	output = 0;
	input = '';
	ex.innerText = '';
	result.innerText = '';
	check = false;
	count = 0;
});

swit.addEventListener('click', () => {
	if (input.length <= 0) return
	input = `-(${input})`
	ex.innerText = input;	
	check = true;
	count = 0;
});

checkbox.addEventListener('click', () => {
	if (checkbox.checked) {
		document.documentElement.style.setProperty('--primary-color', '#333333');
		document.documentElement.style.setProperty('--bold-color', '#262626');
		document.documentElement.style.setProperty('--bolder-color', '#202020');
		document.documentElement.style.setProperty('--boldest-color', '#1A1A1A');
		document.documentElement.style.setProperty('--light-color', '#4E4E4E');
		document.documentElement.style.setProperty('--lighter-color', '#858585');
		document.documentElement.style.setProperty('--bg-color', '#223239');
		document.documentElement.style.setProperty('--text-color', '#fff');
		document.documentElement.style.setProperty('--bg-sub-color', '#bbd7e4');
	} else {
		document.documentElement.style.setProperty('--primary-color', '#2980B9');
		document.documentElement.style.setProperty('--bold-color', '#2255A4');
		document.documentElement.style.setProperty('--bolder-color', '#1B308F');
		document.documentElement.style.setProperty('--boldest-color', '#241062');
		document.documentElement.style.setProperty('--light-color', '#44A9C4');
		document.documentElement.style.setProperty('--lighter-color', '#7AD9CA');
		document.documentElement.style.setProperty('--bg-color', '#fff');
		document.documentElement.style.setProperty('--text-color', '#414141');
		document.documentElement.style.setProperty('--bg-sub-color', '#464646');
	}
});


