//* Guión principal.
import escuchar_controles from "./controles.js";

const lienzo = document.getElementById("lienzo");
const ctx = lienzo.getContext("2d");

lienzo.ancho = 1024;
lienzo.alto = 576;

ctx.fillRect(0, 0, lienzo.ancho, lienzo.alto);

const gravedad = 0.4;
const suelo = lienzo.alto - 32;

const teclas = {
	actual: "",
	a: { activa: false },
	w: { activa: false },
	d: { activa: false },
	izquierda: { activa: false },
	arriba: { activa: false },
	derecha: { activa: false }
};

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
		this.posición.x += this.velocidad.x;
		this.posición.y += this.velocidad.y;
		if (this.posición.y + this.tamaño.alto + this.velocidad.y >= suelo) {
			this.velocidad.y = 0;
			this.posición.y = suelo - this.tamaño.alto;
		} else {
			this.velocidad.y += gravedad;
		}
	}
}

const jugador = new Objeto({ ancho: 120, alto: 240 }, { x: 64, y: 64 }, "#66F", { x: 0, y: 2 });

const enemigo = new Objeto({ ancho: 120, alto: 240 }, { x: 840, y: 64 }, "#F22", { x: 0, y: 2 });

escuchar_controles(teclas);

function animación() {
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, lienzo.ancho, lienzo.alto);
	jugador.actualiza();
	enemigo.actualiza();

	jugador.velocidad.x = 0;
	enemigo.velocidad.x = 0;
	// console.log(teclas.actual);
	if (teclas.a.activa && teclas.actual == "a") {
		jugador.velocidad.x = -10;
	} else if (teclas.d.activa && teclas.actual == "d") {
		jugador.velocidad.x = 10;
	} else if (teclas.a.activa) {
		jugador.velocidad.x = -10;
	} else if (teclas.d.activa) {
		jugador.velocidad.x = 10;
	}
	if (teclas.w.activa && jugador.posición.y + jugador.tamaño.alto >= suelo - 5) {
		jugador.velocidad.y = -13;
	}

	if (teclas.izquierda.activa && teclas.actual == "izquierda") {
		enemigo.velocidad.x = -10;
	} else if (teclas.derecha.activa && teclas.actual == "derecha") {
		enemigo.velocidad.x = 10;
	} else if (teclas.izquierda.activa) {
		enemigo.velocidad.x = -10;
	} else if (teclas.derecha.activa) {
		enemigo.velocidad.x = 10;
	}
	if (teclas.arriba.activa && enemigo.posición.y + enemigo.tamaño.alto >= suelo - 5) {
		enemigo.velocidad.y = -13;
	}

	window.requestAnimationFrame(animación);
}

animación();