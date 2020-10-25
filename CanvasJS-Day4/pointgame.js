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
let audio = new Audio('http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Mouse%20Click%20Fast.wav-23232-Free-Loops.com.mp3');
let numb = 0;
let size = 12;

class Ball {
	constructor(x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
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

	drawBoss() {
		if (numb % 10 == 0 && numb != 0 && numb != arrball.length) {
			this.radius *= 1.005;
			size *=1.005;
		}

		pen.shadowBlur = 20;
		pen.shadowColor = "green";
		pen.beginPath();
		pen.fillStyle = this.color;
		pen.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		pen.fill();

		pen.beginPath();
		pen.font = `${size}px Georgia`;
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

let bossBall = new Ball(60, 60, 30, 'orange');
let arrball = [];
for (let i =0; i < 30; i ++) {
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

function animate() {
	if (numb == 30) {
		setTimeout(function(){
			
		}, 2000);
		return
	}

	requestAnimationFrame(animate);
	console.log('abc');

	pen.clearRect(0, 0, canvas.width, canvas.height);

	bossBall.drawBoss();

	pen.beginPath();
	pen.fillStyle = 'white';
	pen.font = '50px Georgia';
	pen.fillText(numb, 100, canvas.height - 50);
	
	arrball.forEach(element => {
		element.draw();
	});
	bossBall.move(arrball);
}

animate();






