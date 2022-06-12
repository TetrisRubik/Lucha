//* Guión principal.
import escuchar_controles from "./controles.js";
import { crear_lienzo, definir_estilo, dibujar_rectángulo } from "./lienzo.js";

const dimensiones = { ancho: 0, alto: 0 };
crear_lienzo(dimensiones);

const gravedad = 0.4;
const suelo = dimensiones.alto - 32;

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
	constructor(tamaño, posición, color) {
		this.tamaño = tamaño;
		this.posición = posición;
		this.color = color;
		this.velocidad = { x: 0, y: 0 };
	}

	dibujar() {
		definir_estilo(this.color);
		dibujar_rectángulo(this.posición.x, this.posición.y, this.tamaño.ancho, this.tamaño.alto);
	}

	actualizar() {
		this.dibujar();
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

const jugador = new Objeto({ ancho: 120, alto: 240 }, { x: 64, y: 64 }, "#66F");

const enemigo = new Objeto({ ancho: 120, alto: 240 }, { x: 840, y: 64 }, "#F22");

escuchar_controles(teclas);

function pedir_fotograma() {
	definir_estilo("#000");
	dibujar_rectángulo(0, 0, dimensiones.ancho, dimensiones.alto);
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