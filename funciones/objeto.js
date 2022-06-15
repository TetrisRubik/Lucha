//* Clase de los elementos principales del juego.
import { definir_estilo, dibujar_rectángulo } from "./lienzo.js";

export default class Objeto {
	constructor(posición, tamaño, color, juego) {
		this.posición = posición;
		this.tamaño = tamaño;
		this.color = color;
		this.velocidad = { x: 0, y: 0 };
		this.juego = juego;
	}

	dibujar() {
		definir_estilo(this.color);
		dibujar_rectángulo(this.posición, this.tamaño);
	}

	actualizar() {
		this.dibujar();
		this.posición.x += this.velocidad.x;
		this.posición.y += this.velocidad.y;
		if (this.posición.y + this.velocidad.y <= this.juego.suelo) {
			this.velocidad.y = 0;
			this.posición.y = this.juego.suelo;
		} else {
			this.velocidad.y -= this.juego.gravedad;
		}
	}
}