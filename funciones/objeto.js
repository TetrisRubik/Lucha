import { definir_estilo, dibujar_rectángulo } from "./lienzo.js";

let id = 1;

export default class Objeto {
	constructor(posición, tamaño, color, juego, n) {
		this.posición = posición;
		this.tamaño = tamaño;
		this.color = color;
		this.velocidad = { x: 0, y: 0 };
		this.orientación = true;
		this.atacando = false;
		this.juego = juego;
		this.barra = document.getElementById("vida_" + id);
		this.ataque = {
			color: "#0F0",
			posición: {
				x: this.posición.x + 75,
				y: this.posición.y + this.tamaño.alto - 120
			},
			tamaño: {
				ancho: 240,
				alto: 50
			}
		};
		id++;
	}

	dibujar() {
		definir_estilo(this.color);
		dibujar_rectángulo(this.posición, this.tamaño);
		if (this.atacando) {
			definir_estilo(this.ataque.color);
			dibujar_rectángulo(this.ataque.posición, this.ataque.tamaño);
		}
	}

	actualizar() {
		this.dibujar();
		this.ataque.posición.y = this.posición.y + this.tamaño.alto - 120;
		this.posición.x += this.velocidad.x;
		this.posición.y += this.velocidad.y;
		if (this.posición.y + this.velocidad.y <= this.juego.suelo) {
			this.velocidad.y = 0;
			this.posición.y = this.juego.suelo;
		} else {
			this.velocidad.y -= this.juego.gravedad;
		}
	}

	ejecutar_controles(teclas, { izquierda, derecha, arriba, atacar }) {
		if (teclas[izquierda] && teclas.actual == izquierda) {
			this.velocidad.x = -10;
		} else if (teclas[derecha] && teclas.actual == derecha) {
			this.velocidad.x = 10;
		} else if (teclas[izquierda]) {
			this.velocidad.x = -10;
		} else if (teclas[derecha]) {
			this.velocidad.x = 10;
		}
		if (teclas[arriba] && this.posición.y <= this.juego.suelo) {
			this.velocidad.y = 13;
		}
		if (teclas[atacar]) {
			this.atacar();
		}
	}

	atacar() {
		this.atacando = true;
		setTimeout(() => {
			this.atacando = false;
		}, 500);
	}

	mirar_derecha() {
		this.ataque.posición.x = this.posición.x + this.tamaño.ancho;
	}

	mirar_izquierda() {
		this.ataque.posición.x = this.posición.x - this.ataque.tamaño.ancho;
	}

	perder_vida() {
		const actual = this.barra.style.width.split("px")[0];
		this.barra.style.width = actual - 2 + "px";
		if (this.barra.style.width < 0)
			this.barra.style.width = "0px";
	}
}