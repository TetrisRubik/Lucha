//* Funciones que tratan y pintan sobre el lienzo.
const id_lienzo = "lienzo";
const tipo_contexto = "2d";
let contexto;

export function crear_lienzo(dimensiones) {
	const nodo_lienzo = document.getElementById(id_lienzo);
	dimensiones.ancho = parseInt(nodo_lienzo.getAttribute("width"));
	dimensiones.alto = parseInt(nodo_lienzo.getAttribute("height"));
	contexto = nodo_lienzo.getContext(tipo_contexto);
}

export function definir_estilo(estilo) {
	contexto.fillStyle = estilo;
}

export function dibujar_rectángulo(posición_x, posición_y, tamaño_x, tamaño_y) {
	contexto.fillRect(posición_x, posición_y, tamaño_x, tamaño_y);
}