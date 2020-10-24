let canvas = document.getElementById('canvas');
let pen = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 600;
canvas.style.border = '1px solid red';

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
		pen.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		pen.fillStyle = this.color;
		pen.fill();
	}

	drawBoss() {
		pen.beginPath();
		pen.fillStyle = this.color;
		pen.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		pen.fill();
		pen.beginPath();
		pen.fillStyle = 'black';
		pen.font = '18px Georgia';
		pen.fillText('vuxmen', this.x - this.radius/2, this.y);
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
			}
		});
		
		
	}
}

let arrball = [];
for (let i =0; i < 20; i ++) {
	let x = Math.floor(Math.random() * canvas.width);
	let y = Math.floor(Math.random() * canvas.height);
	let point = new Ball(x, y, 8, 'red');
	arrball.push(point);
}
console.log(arrball);

let bossBall = new Ball(100, 100, 50, 'orange');
let numb = 0;

// bossBall.drawBoss();
// arrball.forEach(element => {
// 	element.draw();
// });

// pen.beginPath();
// pen.fillStyle = 'black';
// pen.font = '50px Georgia';
// pen.fillText('0', 100, canvas.height - 50);

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
	requestAnimationFrame(animate);

	pen.clearRect(0, 0, canvas.width, canvas.height);

	bossBall.drawBoss();
	console.log(bossBall);

	pen.beginPath();
	pen.fillStyle = 'black';
	pen.font = '50px Georgia';
	pen.fillText(numb, 100, canvas.height - 50);
	
	arrball.forEach(element => {
		element.draw();
	});
	bossBall.move(arrball);

}

//bossBall.drawBoss();
animate();






