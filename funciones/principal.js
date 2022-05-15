//* Guión principal.
const lienzo = document.getElementById("lienzo");
const ctx = lienzo.getContext("2d");

lienzo.width = 1024;
lienzo.heigth = 576;

ctx.fillRect(0, 0, lienzo.width, lienzo.heigth);

class Objeto {
	constructor(posición) {
		this.posición = posición;
	}

	dibuja() {
		ctx.fillStyle = 'red';
		ctx.fillRect(this.posición.x, this.posición.y, 50, 100);
	}
}

const jugador = new Objeto({
	x: 0,
	y: 0
});

jugador.dibuja();