//* Guión principal.
const lienzo = document.getElementById("lienzo");
const ctx = lienzo.getContext("2d");

lienzo.ancho = 1024;
lienzo.alto = 576;

ctx.fillRect(0, 0, lienzo.ancho, lienzo.alto);

const gravedad = 0.4;
const suelo = lienzo.alto - 36;

class Objeto {
	constructor(tamaño, posición, color, velocidad) {
		this.tamaño = tamaño;
		this.posición = posición;
		this.color = color;
		this.velocidad = velocidad;
	}

	dibuja() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.posición.x, this.posición.y, this.tamaño.ancho, this.tamaño.alto);
	}

	actualiza() {
		this.dibuja();
		this.posición.y += this.velocidad.y;
		if (this.posición.y + this.tamaño.alto + this.velocidad.y >= suelo) {
			this.velocidad.y = 0;
			this.posición.y = suelo - this.tamaño.alto;
		} else {
			this.velocidad.y += gravedad;
		}
	}
}

const jugador = new Objeto({ ancho: 50, alto: 100 }, { x: 64, y: 64 }, "#66F", { x: 0, y: 2 });

const enemigo = new Objeto({ ancho: 50, alto: 100 }, { x: 910, y: 64 }, "#F22", { x: 0, y: 2 });

function animación() {
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, lienzo.ancho, lienzo.alto);
	jugador.actualiza();
	enemigo.actualiza();
	window.requestAnimationFrame(animación);
}

animación();