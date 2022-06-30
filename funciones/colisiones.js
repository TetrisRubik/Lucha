export function colisión_rectangular(objeto_A, objeto_B) {
	return colisión_rectangular_superior(objeto_A.ataque.posición, objeto_B) &&
		colisión_rectangular_derecha(objeto_A.ataque, objeto_B.posición) &&
		colisión_rectangular_inferior(objeto_A.ataque, objeto_B.posición) &&
		colisión_rectangular_izquierda(objeto_A.ataque.posición, objeto_B);
}

function colisión_rectangular_superior(posición_A, objeto_B) {
	return posición_A.y <= objeto_B.posición.y + objeto_B.tamaño.alto;
}

function colisión_rectangular_derecha(objeto_A, posición_B) {
		return objeto_A.posición.x + objeto_A.tamaño.ancho >= posición_B.x;
}

function colisión_rectangular_inferior(objeto_A, posición_B) {
	return objeto_A.posición.y + objeto_A.tamaño.alto >= posición_B.y;
}

function colisión_rectangular_izquierda(posición_A, objeto_B) {
	return posición_A.x <= objeto_B.posición.x + objeto_B.tamaño.ancho;
}