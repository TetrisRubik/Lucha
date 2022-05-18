//* Guión principal.
const lienzo = document.getElementById("lienzo");
const ctx = lienzo.getContext("2d");

lienzo.ancho = 1024;
lienzo.alto = 576;

ctx.fillRect(0, 0, lienzo.ancho, lienzo.alto);

class Objeto {
	constructor(posición, color, velocidad) {
		this.posición = posición;
		this.color = color;
		this.velocidad = velocidad;
	}

	dibuja() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.posición.x, this.posición.y, 50, 100);
	}

	actualiza() {
		this.dibuja();
		this.posición.y += 10;
	}
}

const jugador = new Objeto({ x: 64, y: 64 }, "#66F", { x: 0, y: 0 });

const rival = new Objeto({ x: 910, y: 64 }, "#F22", { x: 0, y: 0 });

jugador.dibuja();
rival.dibuja();

function animación() {
	window.requestAnimationFrame(animación);
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, lienzo.ancho, lienzo.alto);
	jugador.actualiza();
	rival.actualiza();
}

animación();