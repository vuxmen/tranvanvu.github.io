let player1_score = document.querySelectorAll('.player-score')[0];
let player2_score = document.querySelectorAll('.player-score')[1];
let player1_currentScore = document.querySelectorAll('.player-current-box')[0];
let player2_currentScore = document.querySelectorAll('.player-current-box')[1];
let player1_panel = document.querySelector('.player-0-panel');
let player2_panel = document.querySelector('.player-1-panel');
let img1 = document.querySelectorAll('.dice')[0];
let img2 = document.querySelectorAll('.dice')[1];
let player1_name = document.querySelectorAll('.player-name')[0];
let player2_name = document.querySelectorAll('.player-name')[1];
let btn_roll = document.querySelector('.btn-roll');
let btn_hold = document.querySelector('.btn-hold');
let btn_final = document.querySelector('.final-score');
//Reset Game

function resetGame() {
	player1_score.innerText = '0';
	player2_score.innerText = '0';
	player1_currentScore.innerText = '0';
	player2_currentScore.innerText = '0';
	img1.style.display = 'none';
	img2.style.display = 'none';
	player1_name.innerText = 'Player 1';
	player2_name.innerText = 'Player 2';
}

resetGame();

// Gaming
let currentState = 'player1';
let diceCase = [];
for (let i = 1; i < 7; i ++) {
	let img = `img/dice-${i}.png`;
	diceCase.push(img);
}
console.log(diceCase);

player1_currentScore.innerText = '0';

btn_roll.addEventListener('click', function() {
	maxPoint =  Number(btn_final.value);
	if (maxPoint == 0) {
		alert('Nhập mức điểm trước khi chơi');
		return
	}
	if (Number(player1_score.innerText) >= maxPoint) {
		alert('Player 1 win the Game!');
		return
	}
	if (Number(player2_score.innerText) >= maxPoint) {
		alert('Player 2 win the Game!');
		return
	}
	img1.style.display = 'block';
	img2.style.display = 'block';
	let m = Math.floor(Math.random() * diceCase.length);
	let n = Math.floor(Math.random() * diceCase.length);
	img1.src = diceCase[m];
	img2.src = diceCase[n];
	if (currentState == 'player1') {
		if (m == 0 || n == 0) {
			currentState = 'player2';
			player1_currentScore.innerText = '0';
			player1_panel.classList.remove('active');
			player2_panel.classList.add('active');
		} else {
			let score_p1 = Number(player1_currentScore.innerText ) + m + 1 + n + 1;
			player1_currentScore.innerText = score_p1;
		}
	} else {
		if (m == 0 || n == 0) {
			currentState = 'player1';
			player2_currentScore.innerText = '0';
			player2_panel.classList.remove('active');
			player1_panel.classList.add('active');
		} else {
			let score_p2 = Number(player2_currentScore.innerText ) + m + 1 + n + 1;
			player2_currentScore.innerText = score_p2;
		}
	}
});

btn_hold.addEventListener('click', function() {
	if (currentState == 'player1') {
		currentState = 'player2';
		player1_score.innerText = Number(player1_score.innerText) + Number(player1_currentScore.innerText);
		player1_panel.classList.remove('active');
		player2_panel.classList.add('active');
		player1_currentScore.innerText = '0';
	} else if (currentState == 'player2' ) {
		currentState = 'player1';
		player2_score.innerText = Number(player2_score.innerText) + Number(player2_currentScore.innerText);
		player2_panel.classList.remove('active');
		player1_panel.classList.add('active');
		player2_currentScore.innerText = '0';
	}
});
