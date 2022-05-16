//* Guión principal.
const lienzo = document.getElementById("lienzo");
const ctx = lienzo.getContext("2d");

lienzo.width = 1024;
lienzo.heigth = 576;

ctx.fillRect(0, 0, lienzo.width, lienzo.heigth);

class Objeto {
	constructor(posición, color) {
		this.posición = posición;
		this.color = color;
	}

	dibuja() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.posición.x, this.posición.y, 50, 100);
	}
}

const jugador = new Objeto({
	x: 64,
	y: 64
}, "#66F");

const enemigo = new Objeto({
	x: 910,
	y: 64
}, "#F22");

jugador.dibuja();
enemigo.dibuja();