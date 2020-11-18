let tag = document.getElementsByTagName('li');
let deck = document.querySelector('.deck');
let score = document.querySelector('.moves')
let newtag;
let check = [];
let move = 0;
[...tag].forEach(element => {
	element.classList.remove('open');
	element.classList.remove('disable');
	element.classList.remove('match');
	element.classList.remove('unmatched');
}); 

function randomIndex(arr) {
	return arr.sort(function() {
		return Math.random() - 0.5;
	});
}

newtag = randomIndex([...tag]);
console.log(newtag);

deck.innerHTML = '';

for (let i = 0; i < newtag.length; i ++) {
	deck.appendChild(newtag[i]);
}

// console.log(deck.innerHTML);


	
newtag.forEach((element, index) => {
	element.addEventListener('click', () => {
		if (check.length < 2) {
			element.classList.add('open');
			check.push(element);
		} 
		if (check.length == 2) {
			move ++;
			score.innerText = move;

			if (check[0].type == check[1].type) {
				for (let i = 0; i < 2; i ++) {
					check[i].classList.remove('open');
					check[i].classList.add('match');
					check[i].classList.add('disable');
				}
			check = [];
			} else if (check[0].type != check[1].type) {
				console.log('Khong trung nhau');
				for (let i = 0; i < 2; i ++) {
					check[i].classList.add('unmatched');
					setTimeout(function() {
						check[i].classList.remove('unmatched');
						check[i].classList.remove('disable');
						check[i].classList.remove('open');
						check[i].classList.remove('match');
					}, 1000, check);
					
				}
			setTimeout(function() {
				check = [];
			}, 1000);
			
			}
		}
	});
});




