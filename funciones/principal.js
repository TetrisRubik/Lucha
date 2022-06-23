//* Guión principal.
import { colisión_rectangular } from "./colisiones.js";
import escuchar_teclado from "./controles.js";
import { crear_lienzo, limpiar_lienzo } from "./lienzo.js";
import Objeto from "./objeto.js";

const teclas = {};
const variables_juego = {
	gravedad: 0.4,
	suelo: 32
};

crear_lienzo();
escuchar_teclado(teclas);

const jugador = new Objeto({ x: 64, y: 32 }, { ancho: 120, alto: 240 }, "#66F", variables_juego);
const enemigo = new Objeto({ x: 840, y: 32 }, { ancho: 120, alto: 240 }, "#F22", variables_juego);

function cargar_fotograma() {
	limpiar_lienzo();

	jugador.actualizar();
	enemigo.actualizar();

	jugador.velocidad.x = 0;
	enemigo.velocidad.x = 0;

	// Controles del jugador 1.
	if (teclas.a && teclas.actual == "a") {
		jugador.velocidad.x = -10;
	} else if (teclas.d && teclas.actual == "d") {
		jugador.velocidad.x = 10;
	} else if (teclas.a) {
		jugador.velocidad.x = -10;
	} else if (teclas.d) {
		jugador.velocidad.x = 10;
	}
	if (teclas.w && jugador.posición.y <= variables_juego.suelo) {
		jugador.velocidad.y = 13;
	}
	if (teclas[" "]) {
		jugador.atacar();
	}

	// Controles del jugador 2.
	if (teclas.j && teclas.actual == "j") {
		enemigo.velocidad.x = -10;
	} else if (teclas.l && teclas.actual == "l") {
		enemigo.velocidad.x = 10;
	} else if (teclas.j) {
		enemigo.velocidad.x = -10;
	} else if (teclas.l) {
		enemigo.velocidad.x = 10;
	}
	if (teclas.i && enemigo.posición.y <= variables_juego.suelo) {
		enemigo.velocidad.y = 13;
	}
	if (teclas.enter) {
		enemigo.atacar();
	}

	// Orientación del personaje.
	if (jugador.posición.x < enemigo.posición.x) {
		jugador.mirar_derecha();
		enemigo.mirar_izquierda();
	} else {
		jugador.mirar_izquierda();
		enemigo.mirar_derecha();
	}

	// Colisiones.
	if (jugador.atacando) {
		if (colisión_rectangular(jugador, enemigo)) {
			console.log("JUGADOR");
		}
	}
	if (enemigo.atacando) {
		if (colisión_rectangular(enemigo, jugador)) {
			console.log("ENEMIGO");
		}
	}

	window.requestAnimationFrame(cargar_fotograma);
}

cargar_fotograma();