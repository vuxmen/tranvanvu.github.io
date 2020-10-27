const startGame = document.getElementById('startgame');
const game = document.getElementById('game');
const endGame = document.getElementById('endgame');

const btnStart = document.getElementById('btn-start');
const btnRestart = document.getElementById('btn-restart');
const btnQuit = document.getElementById('btn-quit');

const userInput = document.getElementById('userInput');
const userName = document.getElementById('username');
const mark = document.getElementById('mark');
const countdown = document.getElementById('countdown');
countdown.innerText = 22;
btnStart.addEventListener('click', () => {
	animate();
	if (userInput.value == '') {
		window.alert('Nhập user name');
		return
	}
	userName.innerText = userInput.value;
	startGame.style.display = 'none';
	game.style.display = 'flex';
	setTimeout(function() {
		document.getElementsByTagName('h1')[1].style.display = 'none';
		document.getElementsByTagName('h2')[0].style.display = 'none';
		document.getElementsByTagName('h3')[0].style.display = 'none';
		canvas.style.display = 'flex';
	}, 2000);
	setInterval(function(){
		if (countdown.innerText <= 0) {
			return
		}
		countdown.innerText -= 1;
	}, 1000);
	playGame();

});

btnQuit.addEventListener('click', () => {
	window.location.reload();
});

btnRestart.addEventListener('click', () => {
	game.style.display = 'flex';
	endGame.style.display = 'none';
	startGame.style.display = 'none';

	document.getElementsByTagName('h1')[1].style.display = 'block';
	document.getElementsByTagName('h2')[0].style.display = 'block';
	document.getElementsByTagName('h3')[0].style.display = 'block';
	canvas.style.display = 'none';
	resetGame();
	playGame();
	animate();
});

function resetGame() {
	bossBall.x = 60;
	bossBall.y = 60;
	bossBall.radius = 30;
	bossBall.color = 'orange';
	bossBall.dx = 0;
	bossBall.dy = 0;

	arrball = [];
	for (let i = 0; i < 30; i ++) {
		let radius = 8;
		let x = Math.floor(Math.random() * (canvas.width - radius));
		let y = Math.floor(Math.random() * (canvas.height - radius));
		while (x <= bossBall.x + bossBall.radius && y <= bossBall.y + bossBall.radius || x <= radius || x >= canvas.width - radius || y <= radius || y >= canvas.height - radius) {
			x = Math.floor(Math.random() * (canvas.width - radius));
			y = Math.floor(Math.random() * (canvas.height - radius))
		}
		let point = new Ball(x, y, radius, 'red');
		arrball.push(point);	
	}

	numb = 0;


}

let timeout;
function playGame() {
	timeout = setTimeout(function(){
		game.style.display = 'none';
		endGame.style.display = 'flex';
		mark.innerText = `${numb} / 30`;
	}, 22000);
}
clearTimeout(timeout);

let canvas = document.getElementById('canvas');
let pen = canvas.getContext('2d');
canvas.style.border = '1px solid red';
canvas.style.backgroundColor = 'black';
canvas.width = 0.9  * window.outerWidth;
canvas.height = 0.8 * window.outerHeight;
window.addEventListener('resize', () => {
	canvas.style.border = '1px solid red';
	canvas.width = 0.9  * window.outerWidth;
	canvas.height = 0.8 * window.outerHeight;
});

let username = 'vuxmen';
let audio = new Audio('sound.mp3');
let numb = 0;
let state = true;

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
		pen.fillText(username, this.x - 1.4 * this.radius/2, this.y + 0.1 * this.radius);
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

let bossBall = new Ball(60, 60, 30, 'orange', 12);
let arrball = [];
for (let i = 0; i < 30; i ++) {
	let radius = 8;
	let x = Math.floor(Math.random() * (canvas.width - radius));
	let y = Math.floor(Math.random() * (canvas.height - radius));
	while (x <= bossBall.x + bossBall.radius && y <= bossBall.y + bossBall.radius || x <= radius || x >= canvas.width - radius || y <= radius || y >= canvas.height - radius) {
		x = Math.floor(Math.random() * (canvas.width - radius));
		y = Math.floor(Math.random() * (canvas.height - radius))
	}
	let point = new Ball(x, y, radius, 'red');
	arrball.push(point);
}


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

function winGameAlert() {
	setTimeout(function() {
		if (numb == arrball.length  && state == true) {
			bossBall.dx = 0;
			bossBall.dy = 0;
			window.cancelAnimationFrame(animate);
			state = false;
			return false
		}
	}, 2000);
}

function animate() {
	winGameAlert();
	
	if (winGameAlert() == false) return

	window.requestAnimationFrame(animate);

	console.log('abc');
	pen.clearRect(0, 0, canvas.width, canvas.height);

	bossBall.drawBoss(arrball);

	pen.beginPath();
	pen.fillStyle = 'white';
	pen.font = '50px Georgia';
	pen.fillText(numb, 100, canvas.height - 50);
	
	arrball.forEach(element => {
		element.draw();
	});
	bossBall.move(arrball);
	
}



