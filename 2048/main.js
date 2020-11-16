

let canvas = document.querySelector('#canvas');
let pen = canvas.getContext('2d');
let w;

canvas.width = 600;
canvas.height = 600;
canvas.style.border = '2px solid black';
canvas.style.display = 'block';
canvas.style.margin = 'auto';
w = canvas.width / 4;

let grid = [
		[0, 0, 0, 0],
		[0, 0, 0, 0], 
		[0, 0, 0, 0], 
		[0, 0, 0, 0]
	];


function setUp() {
	addItem();
	addItem();
}

let empty;
let horizon;
let vertical;

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
	if (options.length > 0);
	let element = randomItem(options);
	let r = Math.random() * 1;
	grid[element.x][element.y] = r > 0.5 ? 2 : 4;
}

function drawItem() {
	pen.font = '60px Roboto';
	pen.fillStyle = 'red';
	pen.lineWidth = 2;
	pen.textBaseline = 'middle';
	pen.textAlign = 'center';
	pen.clearRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			pen.beginPath();
			pen.rect(i * w, j * w, w, w);
			pen.stroke();
			let val = grid[i][j];
			if (val !== 0) {
				pen.beginPath();
				pen.fillText(val, j * w + w/2, i * w + w/2);
			}
		}
	}
}

setUp();

drawItem();

function flingTotheLeft(row) {
	let arr = row.filter(val => val);
	let missing = 4 - arr.length;
	let zero = Array(missing).fill(0);
	let newarr = arr.concat(zero);
	return newarr;
}

function mergeLeft(row) {
	for (let i = 0; i < 3; i ++) {
		if (row[i] == row[i + 1]) {
			row[i] *= 2;
			row.splice(i + 1, 1);
			row.push(0);
			return row
		}
		
	}

}

function flingTotheRight(row) {
	let arr = row.filter(val => val);
	let missing = 4 - arr.length;
	let zero = Array(missing).fill(0);
	let newarr = zero.concat(arr);
	return newarr;
}

function mergeRight(row) {
	for (let i = 3; i > -1; i --) {
		if (row[i] == row[i-1]) {
			row[i] *= 2;
			row.splice(i - 1, 1);
			row.unshift(0);
			return row
		}
	}
}

function firstCondition() {
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			if (grid[i][j] != 0) {
				empty ++;
			}
		}
	}
}

function secondCondition() {
	horizon = false;
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			if (grid[i][j] == grid[i][j+1]) {
				horizon = true;
				return
			}
		}
	}
}

flingTotheTop(column) {
	for (let i = 0; i < 4; i ++) {
		let arr = column.filter(val => val);
		let missing = 4 - arr.length;
		let zero = Array(missing).fill(0);
		let newarr = arr.concat(zero);
	}
}

mergeTop() {
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			
		}
	}
}

//addEvent listener

document.addEventListener('keydown', event => {
	empty = 0
	horizon = false;
	firstCondition();
	secondCondition();
	if (event.keyCode == 37) {
		if (empty == 16 && horizon == false ) {
			alert('Game Over');
			return
		}
		for (let i = 0; i < 4; i ++) {
			grid[i] = flingTotheLeft(grid[i]);
			mergeLeft(grid[i]);
		}	
		addItem();
		drawItem();
	}

	if (event.keyCode == 39) {
		if (empty == 16 && horizon == false ) {
			alert('Game Over');
			return
		}
		for (let i = 0; i < 4; i ++) {
			grid[i] = flingTotheRight(grid[i]);
			mergeRight(grid[i]);
		}	
		addItem();
		drawItem();
	}

	if (event.keyCode == 38) {
		// if (checkEmpty == 16 && checkEqual == false ) {
		// 	alert('Game Over');
		// 	return
		// }
		// for (let i = 0; i < 4; i ++) {
		// 	grid[i] = flingTotheRight(grid[i]);
		// 	mergeRight(grid[i]);
		// }	
		// addItem();
		// drawItem();
	}

});


// let arrayx = [
// 	[1, 2, 4],
// 	[4, 6, 7],
// 	[9, 0, 3]
// ];

// console.log(arrayx[0]);

// let run = (arr, index) => arr.map(x => x[index]);


// console.log(run(arrayx, 1));
















