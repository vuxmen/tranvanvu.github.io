let show = document.querySelector('#show');
let clear = document.querySelector('#clear');
let pre = document.querySelector('#prev');
let next = document.querySelector('#next');
let container = document.querySelector('#cards-container');
let card = container.querySelectorAll('.card');
let table = document.querySelector('#add-container');
let current = 0;
let arrcard = [];
let question = document.querySelector('#question');
let answer = document.querySelector('#answer');
let addcard = document.querySelector('#add-card');
let front = document.querySelector('.inner-card-front');
let back = document.querySelector('.inner-card-back');
let showanswer = false;

card.forEach(e => {
	arrcard.push(e);
});

console.log(arrcard);
arrcard[0].classList.add('active');

show.addEventListener('click', () => {
	table.classList.add('show');
});

addcard.addEventListener('click', () => {
	let newcard = document.createElement('div');
	let innerCard = document.createElement('div');
	let frontCard = document.createElement('div');
	let backCard = document.createElement('div');
	let para1 = document.createElement('p');
	let para2 = document.createElement('p');
	innerCard.classList.add('inner-card');
	frontCard.classList.add('inner-card-front');
	backCard.classList.add('inner-card-back');
	frontCard.appendChild(para1);
	backCard.appendChild(para2);
	innerCard.appendChild(frontCard);
	innerCard.appendChild(backCard);
	newcard.appendChild(innerCard);
	newcard.classList.add('class');
	
	container.innerHTML += `<div class="card">
				<div class="inner-card">
					<div class="inner-card-front">
						<p>
							${question.value}
						</p>
					</div>
					<div class="inner-card-back">
						<p>
							${answer.value}
						</p>
					</div>
				</div>
			</div>`;

	table.classList.remove('show');
	arrcard.push(newcard);
	console.log(arrcard);

});

clear.addEventListener('click', () => {
	arrcard = [];
	container.innerHTML = '';

});

next.addEventListener('click', () => {
	if (current == arrcard.length - 1) return
	arrcard[current].classList.remove('active');
	arrcard[current].classList.add('left');
	current ++;
	arrcard[current].classList.remove('right');
	arrcard[current].classList.add('active');
	
});

pre.addEventListener('click', () => {
	
	if (current == 0) return
	arrcard[current].classList.remove('active');
	arrcard[current].classList.add('right');
	current --;
	
	arrcard[current].classList.add('active');
	arrcard[current].classList.remove('left');

});

card.forEach(e => e.addEventListener('click', () => {
	switch(showanswer) {
		case false:
		e.classList.add('show-answer');
		showanswer = true;
		break;
		case true: 
		e.classList.remove('show-answer');
		showanswer = false;
		break;
	}
	
}));
