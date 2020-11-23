let show = document.querySelector('#show');
let clear = document.querySelector('#clear');
let pre = document.querySelector('#prev');
let next = document.querySelector('#next');
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
		e => {
				container.innerHTML += `<div class="card">
				<div class="inner-card">
						<div class="inner-card-front">
						<p>
						${e.question}
					</p>
					</div>
					<div class="inner-card-back">
						<p>
							${e.answer}
 						</p>
	 					</div>
					</div>
				</div>`
				}
		);
	card = document.querySelectorAll('.card');
	card[current].classList.add('active');
}

pre.addEventListener('click', () => {
	console.log('pre');
	current ++;
	if (current > card.length) return;
	card[current-1].classList.add('left');
	card[current-1].classList.remove('active', 'right');
	card[current].classList.add('active');
});

next.addEventListener('click', () => {
	console.log('next');
	current --;
	if (current < 0) return;
	card[current+1].classList.add('right');
	card[current+1].classList.remove('active', 'left');
	card[current].classList.add('active');
});
