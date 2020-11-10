

let canvas = document.querySelector('#canvas');
let pen = canvas.getContext('2d');
let w;

function createCanvas() {
	canvas.width = 600;
	canvas.height = 600;
	canvas.style.border = '2px solid black';
	canvas.style.display = 'block';
	canvas.style.margin = 'auto';
	w = canvas.width / 4;
}

let grid;

function setUp() {
	createCanvas();
	grid = [
		[0, 0, 0, 0],
		[0, 0, 0, 0], 
		[0, 0, 0, 0], 
		[0, 0, 0, 0]
	];
	console.log(grid);
	addItem();
	addItem();
	
}

function randomItem(arr) {
 	return arr[Math.floor(Math.random() * arr.length)];
} 

function addItem() {
	let options = [];
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			if (grid[i][j] === 0) {
				options.push({x: i, y: j});
			}
		}
	}
	if (options.length > 0) {
		let element = randomItem(options);
		let r = Math.random() * 1;
		grid[element.x][element.y] = r > 0.5 ? 2 : 4;

			
	}
}

function drawItem() {
	pen.font = '60px Roboto';
	pen.fillStyle = 'red';
	pen.lineWidth = 2;
	pen.textBaseline = 'middle';
	pen.textAlign = 'center';
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			pen.beginPath();
			pen.rect(i * w, j * w, w, w);
			pen.stroke();
			let val = grid[i][j];
			if (val !== 0) {
				pen.beginPath();
				pen.fillText(val, i * w + w/2, j * w + w/2);
			}
		}
	}
}

setUp();

drawItem();

function flingTotheLeft(row) {
	let arr = row.filter(val => val);
	let missing = 4 - arr.length;
	let zero = row.fill(0, 0, missing - 1);
	arr.concat(zero);
	return arr;
}

//Addevent listener

document.addEventListener('keydown', (event) => {
	if (event.keyCode == 32) {
		for (let i = 0; i < 4; i ++) {
			grid[i] = flingTotheLeft(grid[i]);
		}
	}
});















