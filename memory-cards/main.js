let show = document.querySelector('#show');
let hide = document.querySelector('#hide');
let clear = document.querySelector('#clear');
let pre = document.querySelector('#prev');
let next = document.querySelector('#next');
let digit = document.querySelector('#current');
let container = document.querySelector('#cards-container');
let table = document.querySelector('#add-container');
let question = document.querySelector('#question');
let answer = document.querySelector('#answer');
let addcard = document.querySelector('#add-card');
let front = document.querySelector('.inner-card-front');
let back = document.querySelector('.inner-card-back');
let showanswer = false;
let current = 0;
let card;

let cardData = [
	{
		question: 'How different DOMstring vs String ?',
		answer: 'A DOMString is a sequence of 16-bit unsigned integers. This corresponds exactly to the JavaScript primitive String type.'
	},
	{
		question: 'What is the same method name of array and string type in Javascript ?',
		answer: '.length'
	}
];

setup();

function setup() {
	container.innerHTML = '';
	cardData.forEach(
		e => container.innerHTML += 
		`<div class="card">
			<div class="inner-card">
				<div class="inner-card-front inner-padding">
					<p>
						${e.question}
					</p>
				</div>
				<div class="inner-card-back inner-padding">
					<p>
						${e.answer}
					</p>
				</div>
			</div>
		</div>`	
	);
	card = document.querySelectorAll('.card');
	card[current].classList.add('active');
	digit.innerText = `${current + 1} / ${card.length}`;
}

pre.addEventListener('click', () => {
	if (current <= 0) return;
	card[current].classList.remove('show-answer');
	card[current].classList.add('right');
	card[current].classList.remove('active', 'left');
	card[current-1].classList.add('active');
	card[current-1].classList.remove('left');
	current --;
	digit.innerText = `${current + 1} / ${card.length}`;
});

next.addEventListener('click', () => {
	if (current >= card.length - 1) return;
	card[current].classList.remove('show-answer');
	card[current].classList.add('left');
	card[current].classList.remove('active', 'right');
	card[current+1].classList.add('active');
	card[current+1].classList.remove('right');
	current ++;
	digit.innerText = `${current + 1} / ${card.length}`;
});

show.addEventListener('click', () => {
	table.classList.add('show');
});

clear.addEventListener('click', () => {
	cardData = [];
	setup();
});

hide.addEventListener('click', () => {
	table.classList.remove('show');
});

addcard.addEventListener('click', () => {
	if (question.value != '' && answer.value != '') {
		cardData.push(
			{
				question: question.value,
				answer: answer.value
			}
		);
		table.classList.remove('show');
		setup();
	} else {
		alert('Chưa nhập đủ dữ liệu, mời nhập lại');
	}
});

container.addEventListener('click', () => {
	switch (showanswer) {
		case false:
			card[current].classList.add('show-answer');
			showanswer = true;
			break;
		case true:
			card[current].classList.remove('show-answer');
			showanswer = false;
			break;
	}
});