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
	const controles_1 = {
		izquierda: "a",
		arriba: "w",
		derecha: "d",
		atacar: " "
	};
	jugador.ejecutar_controles(teclas, controles_1);

	// Controles del jugador 2.
	const controles_2 = {
		izquierda: "j",
		arriba: "i",
		derecha: "l",
		atacar: "enter"
	};
	enemigo.ejecutar_controles(teclas, controles_2);

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
			enemigo.perder_vida();
		}
	}
	if (enemigo.atacando) {
		if (colisión_rectangular(enemigo, jugador)) {
			jugador.perder_vida();
		}
	}

	window.requestAnimationFrame(cargar_fotograma);
}

cargar_fotograma();