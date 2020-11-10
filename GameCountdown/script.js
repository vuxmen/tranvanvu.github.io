let strings = 'Featuring a new version of the Diretide game mode, collect and steal candy from your enemies, while keeping Roshan at bay. The best-of-5 fast-paced brawl will be available for everyone to play until December 22nd. For the duration of the event, Diretide and Dota games you play will reward you with Diretide Points. Every 100 Diretide Points collected, you’ll receive one of over 75 unique rewards including exclusive sets, couriers, wards, a Chest of the Diretide, a Pumpkin Head equippable by any hero, ghostly costumes for your heroes and your courier, an alternate in-game art style global item, chat wheel lines, sprays, MMR Double down tokens and more!';
let arr = strings.split(' ');
let rdvalue;
let learn = document.querySelector('.learn');
let mark = document.querySelector('#mark');
let point = 0;
mark.innerText = point;
//Random word
function random() {
	rdvalue = arr[Math.floor(Math.random() * arr.length)];
	learn.innerText = rdvalue;
}
random();
console.log(arr);

//Countdown
let endTime = 20;
function countdown() {
	let interval = setInterval(function(){
		endTime --;
		cdSpan.innerText = endTime;
		if (endTime <=0) {
			alert('GameOver');
			clearInterval(interval);

		}
	}, 1000);
}

let cdSpan = document.querySelector('#countDown');
cdSpan.innerText = endTime;
countdown();

//Nhap input
let input = document.querySelector('.input');
function check() {
	if (input.value == rdvalue) {
		endTime += 5;
		input.value = '';
		point +=10;
		mark.innerText = point;
		random();
		learn.style.color = 'white';

	} else {
		learn.style.color = 'red';
		point -=10;
		mark.innerText = point;
	}
}



