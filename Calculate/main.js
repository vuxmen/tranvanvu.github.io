
let chars = document.getElementsByClassName('num-input');
let ex = document.querySelector('.c-ex');
let result = document.querySelector('.c-result');
let enter = document.querySelector('.enter');
let sqr = document.querySelector('.sqrt');
let del = document.querySelector('.del');
let clear = document.querySelector('.clear');
let swit = document.querySelector('.switch');
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


