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
	a: false,
	w: false,
	d: false,
	j: false,
	i: false,
	l: false
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

function pedir_fotograma() {
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, lienzo.ancho, lienzo.alto);
	jugador.actualiza();
	enemigo.actualiza();

	jugador.velocidad.x = 0;
	enemigo.velocidad.x = 0;

	if (teclas.a && teclas.actual == "a") {
		jugador.velocidad.x = -10;
	} else if (teclas.d && teclas.actual == "d") {
		jugador.velocidad.x = 10;
	} else if (teclas.a) {
		jugador.velocidad.x = -10;
	} else if (teclas.d) {
		jugador.velocidad.x = 10;
	}
	if (teclas.w && jugador.posición.y + jugador.tamaño.alto >= suelo - 5) {
		jugador.velocidad.y = -13;
	}

	if (teclas.j && teclas.actual == "j") {
		enemigo.velocidad.x = -10;
	} else if (teclas.l && teclas.actual == "l") {
		enemigo.velocidad.x = 10;
	} else if (teclas.j) {
		enemigo.velocidad.x = -10;
	} else if (teclas.l) {
		enemigo.velocidad.x = 10;
	}
	if (teclas.i && enemigo.posición.y + enemigo.tamaño.alto >= suelo - 5) {
		enemigo.velocidad.y = -13;
	}

	window.requestAnimationFrame(pedir_fotograma);
}

pedir_fotograma();