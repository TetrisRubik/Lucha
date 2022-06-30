const id_lienzo = "lienzo";
const lienzo = {};
let contexto;

export function crear_lienzo() {
	const nodo_lienzo = document.getElementById(id_lienzo);
	lienzo.ancho = parseInt(nodo_lienzo.getAttribute("width"));
	lienzo.alto = parseInt(nodo_lienzo.getAttribute("height"));
	contexto = nodo_lienzo.getContext("2d");
}

export function definir_estilo(estilo) {
	contexto.fillStyle = estilo;
}

export function dibujar_rectángulo(posición, { ancho, alto }) {
	contexto.fillRect(posición.x, lienzo.alto - posición.y, ancho, -alto);
}

export function limpiar_lienzo() {
	contexto.fillStyle = "#000";
	contexto.fillRect(0, 0, lienzo.ancho, lienzo.alto);
}