
//UI mockupdata
let ruleList = {
	Origin: 'Default values of 2 and 4. The game will end after 3 minutes or when user click finish game. Score increases by 10 after the combine',
	Medium: 'Random values of 2, 4, 8. The game will end after 3 minutes or when user click finish game. Score increases by 15 after the combine',
	Hard : 'Random values of 2, 4, 8, 16. The game will end after 3 minutes or when user click finish game. Score increases by 20 after the combine',
}

let beginScreen = document.querySelector('.start-game');
let gameScreen = document.querySelector('.game-on');
let rule = document.querySelector('.rule');
let para = document.querySelector('.para');
let level = document.querySelectorAll('.level');
let chooseLevel = document.getElementById('choose-level');
let time = document.querySelector('.time');
let start = document.querySelector('#playGame');
let finish = document.querySelector('#finish');
let restart = document.querySelector('#restart');
let confirmed = document.querySelector('#confirm');
let username = document.querySelector('#username');
let note = document.querySelector('.note');
let inform = document.querySelector('.inform');
let score = document.querySelector('#score');
let scoreTable = document.querySelector('#scoreTable');
let interval;
let point = 0;
let saveScore = [];
let sec = 60;
let min = 2;
let ready = false;
let state = 0;

// Canvas initial
let canvas = document.querySelector('#canvas');
let pen = canvas.getContext('2d');
let w;
canvas.width = 600;
canvas.height = 600;
canvas.style.backgroundColor = 'rgba(238, 228, 218, 0.35)';
canvas.style.border = '1px solid white';
canvas.style.boxShadow = '2px 2px 4px 4px rgba(192,192,192,0.3)';
canvas.style.display = 'block';
canvas.style.margin = 'auto';
w = canvas.width / 4;

//Grid and state at beginning
let grid = [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	];

let begin = true;
let direction = null;
let predirect = null;
let rdx;
let rdy;
let value;
let turn = 0;
let random;

if (localStorage.getItem('tableScore') != null) {
	saveScore = JSON.parse(localStorage.getItem('tableScore'));
}

for (let i = 0; i < saveScore.length; i ++) {
	scoreTable.innerHTML += `
	<p class="align"><span>${i+1}. ${saveScore[i].username}</span> <span>${saveScore[i].score} pts</span></p>
	`
}
resetGame();
mockupData();

function resetGame() {
	para.innerText = '';
	score.innerText = `${point}`;
	level.forEach((item, i) => {
		if(item.selected) {
			let value = Object.values(ruleList);
			para.innerText = value[i];

		}
	});
}

function mockupData() {
	resetGame();
	chooseLevel.addEventListener('change', () => {
		level.forEach((item, i) => {
			if(item.selected) {
				let value = Object.values(ruleList);
				para.innerText = value[i];
				time.innerText = '3 mins 0s';
				state = i;
			}
		});
	});
}

function countdown() {
	interval = setInterval(function() {
		sec --;
		if (sec == 0 && min != 0) {
			min --;
			sec = 59;
		}
		if (min == 0 && sec == -1) {
			alert('Time out, please press the Finish Button to complete');
			clearInterval(interval);
			return
		}
		time.innerText = ` ${min} mins ${sec} s`;
	}, 1000);
}

function compare(a, b) {
	return b.score - a.score;
}

confirmed.addEventListener('click', () => {
	if (username.value == '') {
		note.innerText = '* Please type the name before confirm';
		return
	}
	ready = true;
	note.innerText = '';
});

start.addEventListener('click', () => {
	if (ready == false) {
		inform.innerText = '* Please confirm before playGame';
		return
	}
	beginScreen.style.display = 'none';
	gameScreen.style.display = 'block';
	note.innerText = '';
	countdown();
	randomTwoNumber();
	drawCanvas();
});

finish.addEventListener('click', () => {
	clearInterval(interval);
	if(confirm('Do you want to save your score and begin a new game ?')) {
		saveScore.push({username: username.value, score: point});
		if (saveScore.length > 1) {
				saveScore.sort(compare);
		}
		console.log(saveScore);
		localStorage.setItem('tableScore', JSON.stringify(saveScore));
		setTimeout(function() {
			location.reload();
			beginScreen.style.display = 'block';
			gameScreen.style.display = 'none';
		}, 1000);
	} else {
		time.innerText = ` ${min} mins ${sec} s`;
		countdown();
	}
});

restart.addEventListener('click', () => {
	clearInterval(interval);
	if (confirm('Do you want to restart Game, your score will not be saved')) {
		point = 0;
		score.innerText = `${point}`;
		time.innerText = '3 mins 0s';
		sec = 60;
		min = 2;
		pen.clearRect(0, 0, canvas.width, canvas.height);
		grid = [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		];
		randomTwoNumber();
		drawCanvas();
		countdown();
	} else {
		time.innerText = ` ${min} mins ${sec} s`;
		countdown();
	}
});

//Random 2 numbers at begining
function randomTwoNumber() {
	addNumber();
	addNumber();
	begin = false;
}

function addNumber() {
	//Push index of values which is not equal zero to an array
	let options = [];
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			if (grid[i][j] == 0) {
				options.push({x: i, y: j});
			}
		}
	}
	//Random in index array then assign it to the grid
	if (options.length > 0) {
		let check = checkRandom();
		if (check == true) {
			let r = Math.random() * 1;
			let element = randomNumber(options);
			rdx = element.x;
			rdy = element.y;
			if (state == 0) {
				grid[element.x][element.y] = r	> 0.5 ? 2 : 4;
			} else if (state == 1) {
				if (r <= 0.3) grid[rdx][rdy] = 2;
				if (r > 0.3 && r <= 0.6) grid[rdx][rdy] = 4;
				if (r > 0.6) grid[rdx][rdy] = 8;
			} else if (state == 2) {
				if (r <= 0.2) grid[rdx][rdy] = 2;
				if (r > 0.2 && r <= 0.5) grid[rdx][rdy] = 4;
				if (r > 0.5 && r <= 0.7) grid[rdx][rdy] = 8;
				if (r > 0.7) grid[rdx][rdy] = 16;
			}
			value = grid[rdx][rdy];
		}
	}
}

function randomNumber(arr) {
 	return arr[Math.floor(Math.random() * arr.length)];
}

function drawCanvas() {
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
	redrawRdValue();
}

function redrawRdValue() {
	if (turn > 0 && random == true) {
		pen.beginPath();
		pen.clearRect(rdy * w, rdx * w, w, w);
		pen.fillStyle = '#e9897e';
		pen.fillRect(rdy * w, rdx * w, w, w);
		pen.beginPath();
		pen.fillStyle = 'white';
		pen.fillText(value, rdy * w + w/2, rdx * w + w/2);
	} else return
}

//Slide and Combine the same value
function slideRow(row, key) {
	let newarr;
	let arr = row.filter(val => val);
	let missing = 4 - arr.length;
	let zero = Array(missing).fill(0);
	if (key == 'left' || key == 'up') {
		newarr = arr.concat(zero);
	} else if (key == 'right' || key == 'down') {
		newarr = zero.concat(arr);
	}
	return newarr;
}

function combineRow(row, key) {
	if (key == 'left' || key == 'up') {
		for (let i = 0; i < 3; i ++) {
			if (row[i] == row[i + 1]) {
				row[i] *= 2;
				row.splice(i + 1, 1);
				row.push(0);
				if (row[i] != 0) {
					if (state == 0) point += 10;
					if (state == 1) point += 15;
					if (state == 2) point += 20;
				}
			}
		}
		score.innerText = `${point}`;

	} else if (key == 'right' || key == 'down') {
		for (let i = 3; i > -1; i --) {
			if (row[i] == row[i-1]) {
				row[i] *= 2;
				row.splice(i - 1, 1);
				row.unshift(0);
				if (row[i] != 0) {
					if (state == 0) point += 10;
					if (state == 1) point += 15;
					if (state == 2) point += 20;
				}
			}
		}
		score.innerText = `${point}`;
	}
	return row
}

// Rotate Grid when press UP or DOWN button
function rotateGrid(grid) {
	let newgrid = [];
	for (let i = 0; i < 4; i ++) {
		newgrid.push([]);
	}
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			newgrid[j].push(grid[i][j]);
		}
	}
	return newgrid;

}

//Check row or column is filled or empty
function checkEmptyRow() {
	let empty = 0;
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			if (grid[i][j] == 0) {
				empty ++;
			}
		}
	}
	if (empty > 0) return true
	if (empty == 0) return false
}

function checkEmptyColumn() {
	let empty = 0;
	let gridRotate = rotateGrid(grid);
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 4; j ++) {
			if (gridRotate[i][j] == 0) {
				empty ++;
			}
		}
	}
	if (empty > 0) return true
	if (empty == 0) return false
}

//Check 2 values equal beside eachother
function checkValueRow() {
	let count = 0;
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 3; j ++) {
			if ((grid[i][j] == grid[i][j+1])) {
				count ++;
			}
		}
	}
	if (count > 0) return true
	if (count == 0) return false
}

function checkValueColumn() {
	let count = 0;
	let gridRotate = rotateGrid(grid);
	for (let i = 0; i < 4; i ++) {
		for (let j = 0; j < 3; j ++) {
			if ((gridRotate[i][j] == gridRotate[i][j+1])) {
				count ++;
			}
		}
	}
	if (count > 0) return true
	if (count == 0) return false
}

//Check condition when the function randomNumber is called
function checkRandom() {
	let count = 0;
	if (begin == true) return true
	if (begin == false) {
		if (direction == 'left') {
			random = true;
			for (let i = 0; i < 4; i ++) {
				if (grid[i][0] != 0) {
					count ++;
				}
			}
		}
		if (direction == 'right') {
			random = true;
			for (let i = 0; i < 4; i ++) {
				if (grid[i][3] != 0) {
					count ++;
				}
			}
		}
		if (direction == 'up') {
			random = true;
			grid = rotateGrid(grid);
			for (let i = 0; i < 4; i ++) {
				if (grid[i][0] != 0) {
					count ++;
				}
			}
			grid = rotateGrid(grid);
		}
		if (direction == 'down') {
			random = true;
			grid = rotateGrid(grid);
			for (let i = 0; i < 4; i ++) {
				if (grid[i][3] != 0) {
					count ++;
				}
			}
			grid = rotateGrid(grid);
		}
		if (count < 4) {
			random = true;
			return true
		}
		if (count == 4 && predirect!= null && predirect == direction) {
			pen.beginPath();
			pen.clearRect(rdy * w, rdx * w, w, w);
			random = false;
			return false
		}
		else return true

	}

}

//addEventlistener for Press keyboard
document.addEventListener('keydown', event => {
	switch(event.keyCode) {
		case 37:
		direction = 'left';
		turn ++;
		break
		case 39:
		direction = 'right';
		turn ++;
		break
		case 38:
		direction = 'up';
		turn ++;
		break
		case 40:
		direction = 'down';
		turn ++;
		break
	}

	if (event.keyCode == 37 || event.keyCode == 39) {
		let valueRow = checkValueRow();
		let emptyRow = checkEmptyRow();
		if (valueRow == true || emptyRow == true) {
			for (let i = 0; i < 4; i ++) {
				grid[i] = slideRow(grid[i], direction);
				combineRow(grid[i], direction);
			}
			addNumber();
			drawCanvas();
			predirect = direction;
		} else return
	}

	else if (event.keyCode == 38 || event.keyCode == 40) {
		let valueColumn = checkValueColumn();
		let emptyColumn = checkEmptyColumn();

		if (valueColumn == true || emptyColumn == true) {
			let newGrid = rotateGrid(grid);
			for (let i = 0; i < 4; i ++) {
				newGrid[i] = slideRow(newGrid[i], direction);
				combineRow(newGrid[i], direction);
			}
			grid = rotateGrid(newGrid);
			addNumber();
			drawCanvas();
			predirect = direction;
		} else return
	}
});
