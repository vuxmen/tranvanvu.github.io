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
	}

	draw() {
		pen.beginPath();
		pen.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		pen.fillStyle = this.color;
		pen.fill();
	}

	move() {
		if (distance <= this.radius || this.x <= this.radius || this.x >= canvas.width - this.radius || this.y <= this.radius || this.y >= canvas.height - this.radius) {
			console.log('va cham');
			this.dx = -this.dx;
			this.dy = -this.dy;
		} 
		this.x = this.x + this.dx;
		this.y = this.y + this.dy;
		this.draw();
		
	}

	collision(rect) {
		if (this.x < rect.x) {
			rect.pointX = rect.x;
		}
		if (this.x > rect.x + rect.width) {
			rect.pointX = rect.x + rect.width;
		}
		if (this.x >= rect.x && this.x <= rect.x + rect.width) {
			rect.pointX = this.x;
		}
		if (this.y < rect.y) {
			rect.pointY = rect.y;
		}
		if (this.y > rect.y + rect.height) {
			rect.pointY = rect.y + rect.height;
		}
		if (this.y >= rect.y && this.y <= rect.y + rect.height) {
			rect.pointY = this.y;
		}
		distance = Math.sqrt(Math.abs(this.x - rect.pointX) * Math.abs(this.x - rect.pointX) + Math.abs(this.y - rect.pointY) * Math.abs(this.y - rect.pointY));
		
	} 

}

class Rect {
	constructor(x, y, width, height, color) {
		this.x = x;
		this.y = y; 
		this.width = width;
		this.height = height;
		this.color = color;
		this.pointX = 0;
		this.pointY = 0;
	}

	draw() {
		pen.beginPath();
		pen.rect(this.x, this.y, this.width, this.height);
		pen.fillStyle = this.color;
		pen.fill();
	}

	move() {
		if (distance <= ball.radius || this.x <= this.width || this.x >= canvas.width - this.width || this.y <= this.height || this.y >= canvas.height - this.height) {
			this.dx = -this.dx;
			this.dy = -this.dy;
		} 
		this.x = this.x + this.dx;
		this.y = this.y + this.dy;
		this.draw();
		
		
	}
}

let ball = new Ball(100, 100, 30, 'red');
ball.draw();

let rect = new Rect(canvas.width - 200, canvas.height - 200, 120, 80);
rect.draw();

let distance = Math.sqrt(Math.abs(ball.x - rect.pointX) * Math.abs(ball.x - rect.pointX) + Math.abs(ball.y - rect.pointY) * Math.abs(ball.y - rect.pointY));

document.addEventListener('keydown', () => {
	if (event.keyCode == 32) {
		ball.dx = 5;
		ball.dy = 1;
		rect.dx = -2;
		rect.dy = -2;
	}
	animate();

});

function animate() {
	requestAnimationFrame(animate);
	pen.clearRect(0, 0, canvas.width, canvas.height);
	ball.move();
	rect.move();
	ball.collision(rect);
}









