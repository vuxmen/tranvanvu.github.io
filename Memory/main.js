let tag = document.getElementsByTagName('li');
let deck = document.querySelector('.deck');
let score = document.querySelector('.moves')
let popup1 = document.querySelector('.overlay');
let final = document.querySelector('#finalMove');
let time = document.querySelector('#totalTime');
let timer = document.querySelector('.timer');
let close = document.querySelector('.close');
let replay = document.getElementById('play-again');
let restart = document.querySelector('.restart');
let newtag;
let check = [];
let move = 0;
let state = true;
let same = 0;
let k;
let sec = 0;
let min = 0;

// Reset property of all li tags
[...tag].forEach(element => {
	element.classList.remove('open');
	element.classList.remove('disable');
	element.classList.remove('match');
	element.classList.remove('unmatched');
});

// Random index and return new arr
function randomIndex(arr) {
	return arr.sort(function() {
		return Math.random() - 0.5;
	});
}
newtag = randomIndex([...tag]);

//Remove old child and append new child to deck
deck.innerHTML = '';
newtag.forEach(element => {
	deck.appendChild(element);
});

// Coundownt

let interval = setInterval(function() {
	sec ++;
	if (sec >= 60) {
		min ++;
		sec = 0;
		if (min > 24) {
			min = 0;
		}
	}
	timer.innerText = `${min} mins ${sec} sec`;
}, 1000);




// Declare callback
function callback() {
	check.forEach(element => {
		element.classList.remove('unmatched');
		element.classList.remove('open');
		element.classList.remove('disable');
		element.classList.remove('match');
	});
}

// Remove all class
function removeAll() {
	check.forEach(element => {
		element.classList.add('unmatched');
	});

	state = false;
	setTimeout(function() {
		callback();
		check = [];
		state = true;
	}, 1000);
}


// Eventlistender when click on a li tag
newtag.forEach((element, index, newtag) => {
	element.addEventListener('click', () => {
		if (state == false) return
		else {
			if (check.length < 2) {
				if (newtag.indexOf(element) == k) return
				element.classList.add('open');
				check.push(element);
				k = newtag.indexOf(element);
			}

			if (check.length == 2) {
				move ++;
				score.innerText = move;

				if (check[0].type == check[1].type) {
					check.forEach(element => {
						element.classList.remove('unmatched');
						element.classList.remove('open');
						element.classList.add('match');
						element.classList.add('disable');
					});
					same ++;
					check = [];

				} else if (check[0].type != check[1].type) {
					removeAll();
				}
			}
		}
		if (same == 8) {
			clearInterval(interval);
			popup1.style.visibility = 'visible';
			popup1.style.opacity = 1;
			finalMove.innerText = move;
			time.innerText = `${min} mins ${sec} sec`;

		}
	});
});

close.addEventListener('click', () => {
	popup1.style.visibility = 'hidden';
	popup1.style.opacity = 0;
});

replay.addEventListener('click', () => {
	location.reload();
});

restart.addEventListener('click', () => {
	location.reload();
});
