const canvas = document.getElementById('canvas');
console.log(canvas);
canvas.style.border = '2px solid red';
canvas.width = 600;
canvas.height = 400;

const ctx = canvas.getContext('2d');
console.log(ctx);
ctx.fillStyle = 'green';
ctx.rect(100, 100, 200, 100);
ctx.fill();
ctx.strokeStyle = 'red';
ctx.stroke();

ctx.beginPath(); 

ctx.fillStyle = 'orange';
ctx.rect(200, 250, 200, 100);
ctx.fill();

//Exercise
const canvas2 = document.getElementById('canvas2');
canvas2.style.border = '2px solid blue';
canvas2.width = 600;
canvas2.height = 600;

ctx2 = canvas2.getContext('2d');
ctx2.beginPath();
ctx2.fillStyle = 'red';
ctx2.rect(0, 0, 150, 150);
ctx2.fill();

ctx2.beginPath();
ctx2.fillStyle = 'red';
ctx2.rect(275, 0, 50, 50);
ctx2.fill();

ctx2.beginPath();
ctx2.fillStyle = 'red';
ctx2.rect(500, 0, 100, 100);
ctx2.fill();

ctx2.beginPath();
ctx2.fillStyle = 'red';
ctx2.rect(0, 200, 200, 200);
ctx2.fill();

ctx2.beginPath();
ctx2.fillStyle = 'red';
ctx2.rect(240, 240, 120, 120);
ctx2.fill();

ctx2.beginPath();
ctx2.fillStyle = 'red';
ctx2.rect(570, 285, 30, 30);
ctx2.fill();
 
ctx2.beginPath();
ctx2.fillStyle = 'red';
ctx2.rect(0, 560, 40, 40);
ctx2.fill();

ctx2.beginPath();
ctx2.fillStyle = 'red';
ctx2.rect(500, 550, 100, 100);
ctx2.fill();

ctx2.beginPath();
ctx2.fillStyle = 'red';
ctx2.rect(200, 400, 200, 200);
ctx2.fill();

//Tao quoc ky 
const canvas3 = document.getElementById('canvas3');
canvas3.width = 900;
canvas3.height = 600;
canvas3.style.border = '2px solid red';

ctx3 = canvas3.getContext('2d');
ctx3.fillStyle = '#A51931';
ctx3.rect(0, 0, 900, 100);
ctx3.fill();

ctx3.beginPath();
ctx3.fillStyle = '#2D2A4A';
ctx3.rect(0, 200, 900, 200);
ctx3.fill();

ctx3.beginPath();
ctx3.fillStyle = '#A51931';
ctx3.rect(0, 500, 900, 100);
ctx3.fill();

//Dung class de lam bai tap 1
const canvas4 = document.getElementById('canvas4');
canvas4.style.border = '2px solid blue';
canvas4.width = 600;
canvas4.height = 600;
ctx4 = canvas4.getContext('2d');
class rect {
	constructor(x, y, width, height, color) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
	}

	draw() {
		ctx4.beginPath();
		ctx4.fillStyle = this.color;
		ctx4.rect(this.x, this.y, this.width, this.height);
		ctx4.fill();
	}
}

const rect1 = new rect(100, 100, 200, 100, 'green');
rect1.draw();

// Ve mat cuoi
const canvas5 = document.getElementById('canvas5');
canvas5.width = 600;
canvas5.height = 600;
canvas5.style.backgroundColor = 'green';
const ctx5 = canvas5.getContext('2d');


class circle {
	constructor(x, y, r, p1, p2, boo, color) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.p1 = p1;
		this.p2 = p2;
		this.boo = boo;
		this.color = color;
	}

	draw() {
		ctx5.beginPath();
		ctx5.arc(this.x, this.y, this.r, this.p1, this.p2, this.boo);
		ctx5.stroke();
		ctx5.fillStyle = this.color;
		ctx5.fill();
	}
}

let circle1 = new circle(300, 300, 100, 0, 2 * Math.PI, false, 'orange');
circle1.draw();
let circle2 = new circle(260, 270, 10, 0, 2 * Math.PI, false);
circle2.draw();
let circle3 = new circle(340, 270, 10, 0, 2 * Math.PI, false);
circle3.draw();
let circle4 = new circle(300, 330, 30, 0, Math.PI, false);
circle4.draw();

// Ve line tam giac
const canvas6 = document.getElementById('canvas6');
canvas6.width = 600;
canvas6.height = 600;
canvas6.style.border = '2px solid red';
const ctx6 = canvas6.getContext('2d');
class triangle {
	constructor(x1, y1, x2, y2, x3, y3, color) {
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.x3 = x3;
		this.y3 = y3;
		this.color = color;
	}

	draw() {
		ctx6.beginPath();
		ctx6.strokeStyle = 'red';
		ctx6.moveTo(this.x1, this.y1);
		ctx6.lineTo(this.x2, this.y2);
		ctx6.lineTo(this.x3, this.y3);
		ctx6.lineTo(this.x1, this.y1);
		ctx6.stroke();
		ctx6.fillStyle = this.color;
		ctx6.fill();
	}
}

let triangle1 = new triangle(200, 200, 400, 200, 200, 400, 'black');
triangle1.draw();
let triangle2 = new triangle(200, 410, 400, 210, 400, 410, 'white');
triangle2.draw();

//Text
const canvas7 = document.getElementById('canvas7');
canvas7.width = 400;
canvas7.height = 300;
canvas7.style.border = '1px solid red';

const ctx7 = canvas7.getContext('2d');
ctx7.font = 'italic 40pt Calibri';
ctx7.fillStyle = 'red';
ctx7.shadowColor = 'yellow';
ctx7.shadowOffsetX = 10;
ctx7.shadowOffsetY = 10;
ctx7.shadowBlur = 30;
ctx7.fillText('Hello World', 50, 150);























