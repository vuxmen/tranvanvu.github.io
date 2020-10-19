
class chestForm {
	constructor(width, height, bgColor, outerBorder, padding, alpha, numb, m1, m2, m3, innerBorderStroke, lineWidth) {
		this.width = width;
		this.height = height;
		this.bgColor = bgColor;
		this.outerBorder = outerBorder;
		this.padding = padding;
		this.alpha = alpha;
		this.numb = numb;
		this.m1 = m1; 
		this.m2 = m2;
		this.m3 = m3;
		this.innerBorderStroke = innerBorderStroke;
		this.lineWidth = lineWidth;
	}

	draw() {
		const index = 10;
		const chest = document.getElementById('chest');
		chest.width = this.width;
		chest.height = this.height;
		chest.style.backgroundColor = this.bgColor;
		chest.style.border = this.outerBorder;
		let padding = this.padding;
		let cell = (chest.width - padding * 2) / 8;
		let alpha = this.alpha;
		let numb = this.numb;
		let m1 = this.m1;
		let m2 = this.m2;
		let m3 = this.m3;
		let innerBorder = chest.getContext('2d');
		innerBorder.strokeStyle= this.innerBorderStroke;
		innerBorder.lineWidth = this.lineWidth;
		innerBorder.strokeRect(padding - innerBorder.lineWidth, padding - innerBorder.lineWidth, chest.width + innerBorder.lineWidth + 1 - padding * 2, chest.width + innerBorder.lineWidth + 1 - padding * 2);
		let ctx = chest.getContext('2d');
		for (var j = 0; j < index; j ++) {
			for (var i = 0; i < index; i ++) {
				ctx.beginPath();
				ctx.font = '26pt Calibri';
				ctx.beginPath();
				if (j == 0 && i == 0 || j == 0 && i == index - 1 || j == index - 1 && i == 0 || j == index - 1 && i == index -1) {
					continue;
				} else if (j == 0) {
					ctx.fillStyle = 'black'
					ctx.fillText(alpha[i-1], padding - innerBorder.lineWidth + cell * (i - 1) + m1, padding - m3);
				} else if (j == index - 1) {
					ctx.fillStyle = 'black'
					ctx.fillText(alpha[i-1], padding - innerBorder.lineWidth + cell * (i - 1) + m1, padding * 2 + cell * (j - 1) - m3);
				} else if (i == 0) {
					ctx.fillStyle = 'black'
					ctx.fillText(numb[j-1], m2, padding + cell * j - m1);
				} else if (i == index - 1) {
					ctx.fillStyle = 'black'
					ctx.fillText(numb[j-1], padding + cell * (index -2) + m2, padding + cell * j - m1);
				} else {
					ctx.rect(padding - innerBorder.lineWidth + 1 + cell * (i - 1), padding - innerBorder.lineWidth + 1 + cell * (j - 1), cell, cell);
					if ((i + j) % 2 == 1) {
						ctx.fillStyle = '#e68a00';
						ctx.fill();
					}
				}
			}
		}
	}
}

let newChest = new chestForm(660, 660, '#fcdc9c', '2px solid black', 50, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], [8, 7, 6, 5, 4, 3, 2, 1], 24, 15, 10, 'black', 2);
newChest.draw();










