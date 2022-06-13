//* Guión principal.
import escuchar_teclado from "./controles.js";
import { crear_lienzo, definir_estilo, dibujar_rectángulo, limpiar_lienzo } from "./lienzo.js";

const teclas = {};
const gravedad = 0.4;
const suelo = 32;

crear_lienzo();
escuchar_teclado(teclas);

class Objeto {
	constructor(posición, tamaño, color) {
		this.posición = posición;
		this.tamaño = tamaño;
		this.color = color;
		this.velocidad = { x: 0, y: 0 };
	}

	dibujar() {
		definir_estilo(this.color);
		dibujar_rectángulo(this.posición, this.tamaño);
	}

	actualizar() {
		this.dibujar();
		this.posición.x += this.velocidad.x;
		this.posición.y += this.velocidad.y;
		if (this.posición.y + this.velocidad.y <= suelo) {
			this.velocidad.y = 0;
			this.posición.y = suelo;
		} else {
			this.velocidad.y -= gravedad;
		}
	}
}

const jugador = new Objeto({ x: 64, y: suelo }, { ancho: 120, alto: 240 }, "#66F");
const enemigo = new Objeto({ x: 840, y: suelo }, { ancho: 120, alto: 240 }, "#F22");

function cargar_fotograma() {
	limpiar_lienzo();

	jugador.actualizar();
	enemigo.actualizar();

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
	if (teclas.w && jugador.posición.y <= suelo) {
		jugador.velocidad.y = 13;
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
	if (teclas.i && enemigo.posición.y <= suelo) {
		enemigo.velocidad.y = 13;
	}

	window.requestAnimationFrame(cargar_fotograma);
}

cargar_fotograma();