//* Funciones que tratan y pintan sobre el lienzo.
const id_lienzo = "lienzo";
const dimensiones = {};
let contexto;

export function crear_lienzo() {
	const nodo_lienzo = document.getElementById(id_lienzo);
	dimensiones.ancho = parseInt(nodo_lienzo.getAttribute("width"));
	dimensiones.alto = parseInt(nodo_lienzo.getAttribute("height"));
	contexto = nodo_lienzo.getContext("2d");
}

export function definir_estilo(estilo) {
	contexto.fillStyle = estilo;
}

export function dibujar_rectángulo(posición, tamaño) {
	contexto.fillRect(posición.x, dimensiones.alto - posición.y, tamaño.ancho, -tamaño.alto);
}

export function limpiar_lienzo() {
	contexto.fillStyle = "#000";
	contexto.fillRect(0, 0, dimensiones.ancho, dimensiones.alto);
}