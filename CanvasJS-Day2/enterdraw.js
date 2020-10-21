let canvas = document.getElementById('canvas');
canvas.width = 700;
canvas.height = 500;
canvas.style.border = '1px solid red';
let pen = canvas.getContext('2d');
document.addEventListener('keypress', () => {
	if (event.keyCode != 13) return 
		else {
		let x = Math.floor(Math.random() * canvas.width);
		let y = Math.floor(Math.random() * canvas.height);
		pen.clearRect(0, 0, canvas.width, canvas.height);
		pen.beginPath();
		pen.fillStyle = 'green';
		pen.arc(x, y, Math.floor(Math.random() * 100), 0, 2 * Math.PI);
		pen.fill();
	}
});