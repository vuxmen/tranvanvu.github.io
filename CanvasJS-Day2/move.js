
const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 600;
canvas.style.backgroudColor = '#000';
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
	moveX() {
		
		if(this.x + this.dx < this.radius) {
			this.dx = -this.dx;
		} 
		if (this.x > canvas.width - this.radius) {
			this.dx = -this.dx
		}
		this.x = this.x + this.dx;
		this.draw();
		
	}
	moveY() {
		
		if(this.y + this.dy < this.radius) {
			this.dy = -this.dy
		}
		if (this.y  > canvas.height - this.radius) {
			this.dy = -this.dy
		}
		this.y = this.y + this.dy;
		this.draw();
	}

	collision(ball) {
		let distance = Math.sqrt((this.x - ball.x) ** 2 + (this.y - ball.y) ** 2);
		let sumRadius = this.radius + ball.radius;

		if(distance > sumRadius) {
			this.dx = -this.dx;
		}
	}
 }

 let ball = new Ball(100, canvas.height/2, 30, 'red');
 let ball2 = new Ball(canvas.width - 100, canvas.height/2, 30, 'green');

 console.log(ball);
 ball.draw();
 ball2.draw();

 document.addEventListener('keydown', function(event) {
 	// if (event.keyCode == 37) {
 	// 	ball.dx = 2;
 	// 	ball2.dx = -2;
 	// }
 	// if (event.keyCode == 39) {
 	// 	ball.dx = -2;
 	// 	ball2.dx = 2;
 	// }
 	// if (event.keyCode == 38) {
 	// 	ball.dy = -2;
 	// 	ball2.dy = 2;
 	// }
 	// if (event.keyCode == 40) {
 	// 	ball.dy = 2;
 	// 	ball2.dy = -2;
 	// } 
 	if (event.keyCode == 32) {
 		ball.dx = 2;
 		ball2.dx = -3;
 	}
 })

function animate() {
	requestAnimationFrame(animate);
	pen.clearRect(0, 0, canvas.width, canvas.height);
	ball.moveX();
	ball.moveY();

	ball2.moveX();
	ball2.moveY();

	ball.collision(ball2);
	ball2.collision(ball);
}
animate();

