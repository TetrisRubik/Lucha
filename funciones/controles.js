//* Detección de tecleo y reacción correspondiente.
export default function escuchar_teclado(teclas) {
	document.addEventListener("keydown", (tecla) => {
		activar(tecla.key);
	});

	document.addEventListener("keyup", (tecla) => {
		desactivar(tecla.key);
	});

	function activar(tecla) {
		teclas.actual = tecla.toLowerCase(); //# Modificar tecla actual para cada jugador.
		teclas[tecla.toLowerCase()] = true;
	}

	function desactivar(tecla) {
		teclas[tecla.toLowerCase()] = false;
	}
}