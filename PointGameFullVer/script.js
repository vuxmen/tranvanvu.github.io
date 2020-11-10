//Slide
const startGame = document.getElementById('startgame');
const game = document.getElementById('game');
const endGame = document.getElementById('endgame');

//Button
const btnStart = document.getElementById('btn-start');
const btnRestart = document.getElementById('btn-restart');
const btnQuit = document.getElementById('btn-quit');

//Input data and Timer
const userInput = document.getElementById('userInput');
const userName = document.getElementById('userName');
const mark = document.getElementById('mark');
const countdown = document.getElementById('countdown');
let duration = 20;
countdown.innerText = duration + 's';

//Canvas declaration
let canvas = document.getElementById('canvas');
let pen = canvas.getContext('2d');
canvas.style.border = '1px solid red';
canvas.style.backgroundColor = 'black';
canvas.width = 0.9  * window.outerWidth;
canvas.height = 0.8 * window.outerHeight;

//Responsive Canvas
window.addEventListener('resize', () => {
	canvas.style.border = '1px solid red';
	canvas.width = 0.9  * window.outerWidth;
	canvas.height = 0.8 * window.outerHeight;
});

//Variable initialize
let arrball = [];
let audio = new Audio('sound.mp3');
let numb = 0;
let myReq;
let state = true;
let bossBall;

//Class initialize and Canvas draw
class Ball {
	constructor(x, y, radius, color, fontSize) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.fontSize = fontSize;
		this.dx = 0;
		this.dy = 0;
	}

	draw() {
		pen.beginPath();
		pen.shadowBlur = 0
		pen.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		pen.fillStyle = this.color;
		pen.fill();
	}

	drawBoss(arrball) {
		pen.shadowBlur = 20;
		pen.shadowColor = "green";
		if (numb >= 1/3 * arrball.length) {
			this.radius = 33;
			this.fontSize = 14;
			this.color = 'green';
		}
		if (numb >= 2/3 * arrball.length) {
			this.radius = 35;
			this.fontSize = 15.5;
			this.color = 'blue';
		}
		if (numb == arrball.length) {
			this.radius = 37;
			this.fontSize = 16;
			this.color = 'red';
		}
		pen.beginPath();
		pen.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		pen.fillStyle = this.color;
		pen.fill();
		pen.beginPath();
		pen.font = `${this.fontSize}px Georgia`;
		pen.fillStyle = 'white';
		pen.textAlign = 'center'
		pen.textBaseline = 'middle';
		pen.fillText(userInput.value, this.x, this.y);
	}

	move(arrball) {
		if (this.x + this.dx <= this.radius || this.x + this.dx >= canvas.width - this.radius) {
			this.dx = 0;
		} 
		if (this.y + this.dy <= this.radius || this.y + this.dy >= canvas.height - this.radius) {
			this.dy = 0;
		}
		this.x = this.x + this.dx;
		this.y = this.y + this.dy;
		arrball.forEach(e => {
			if (Math.sqrt((e.x - this.x) ** 2 + (e.y - this.y) ** 2) <= this.radius + e.radius) {
				e.x = undefined;
				e.y = undefined;
				numb ++;
				audio.play();
			}
		});
	}
}

//addEventlistener

document.addEventListener('keydown', () => {
	if (event.keyCode == 37) {
		bossBall.dx = -5;
		bossBall.dy = 0;
	} if (event.keyCode == 39) {
		bossBall.dx = 5;
		bossBall.dy = 0;
	} if (event.keyCode == 38) {
		bossBall.dx = 0;
		bossBall.dy = -5;
	} if (event.keyCode == 40) {
		bossBall.dx = 0;
		bossBall.dy = 5;
	}
});

btnStart.addEventListener('click', () => {
	if (userInput.value == '') {
		window.alert('Nhập user name');
		return
	}
	userName.innerText = userInput.value;
	startGame.style.display = 'none';
	game.style.display = 'flex';
	bossBall = new Ball(60, 60, 30, 'orange', 12);
	randomSmallBall();
	gameOn(animate, countdownTime, endGameShow);
});

btnQuit.addEventListener('click', () => {
	window.location.reload();
});

btnRestart.addEventListener('click', () => {
	resetGame();
	game.style.display = 'flex';
	endGame.style.display = 'none';
	startGame.style.display = 'none';
	document.getElementsByTagName('h1')[1].style.display = 'block';
	document.getElementsByTagName('h2')[0].style.display = 'block';
	document.getElementsByTagName('h3')[0].style.display = 'block';
	canvas.style.display = 'none';
	state = true;
	gameOn(animate, countdownTime, endGameShow);
});

//Function declaration
function resetGame() {
	duration = 20;
	countdown.innerText = duration + 's';
	bossBall.x = 60;
	bossBall.y = 60;
	bossBall.radius = 30; 
	bossBall.color = 'orange';
	bossBall.fontSize = 12;
	bossBall.dx = 0; 
	bossBall.dy = 0;
	numb = 0;
	arrball = [];
	randomSmallBall();
}

function randomSmallBall() {
	let radius = 8;
	for (let i = 0; i < 30; i ++) {
		let x = 0; 
		let y = 0;
		while (x <= bossBall.x + bossBall.radius && y <= bossBall.y + bossBall.radius || x <= radius || x >= canvas.width - radius || y <= radius || y >= canvas.height - radius) {
			x = Math.floor(Math.random() * (canvas.width - radius));
			y = Math.floor(Math.random() * (canvas.height - radius));
		}
		let point = new Ball(x, y, radius, 'red');
		arrball.push(point);
	}
}

function drawText() {
	pen.beginPath();
	pen.fillStyle = 'white';
	pen.font = '50px Georgia';
	pen.fillText(numb, 100, canvas.height - 50);
}

function animate() {
	if (state == true) {
		myReq = requestAnimationFrame(animate);
		if (duration == 0) {
			cancelAnimationFrame(myReq);
			return
		}
		pen.clearRect(0, 0, canvas.width, canvas.height);
		bossBall.drawBoss(arrball);
		drawText();
		arrball.forEach(element => {
			element.draw();
		});
		bossBall.move(arrball);
	} 
	
}

function countdownTime(endGameShow) {
	let interval = setInterval(function(){
		if (duration <= 0) {
			clearInterval(interval);
			endGameShow();
			return
		}
		duration --;
		countdown.innerText = duration + 's';
	}, 1000, endGameShow);
}

function endGameShow() {
	game.style.display = 'none';
	endGame.style.display = 'flex';
	mark.innerText = `${numb} / 30`;
}

function gameOn(animate, countdownTime, endGameShow) {
	setTimeout(function() {
		document.getElementsByTagName('h1')[1].style.display = 'none';
		document.getElementsByTagName('h2')[0].style.display = 'none';
		document.getElementsByTagName('h3')[0].style.display = 'none';
		canvas.style.display = 'flex';
		animate();
		countdownTime(endGameShow);
	}, 2000, animate, countdownTime, endGameShow);
}






