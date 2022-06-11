//* Detección de tecleo y reacción correspondiente.
export default function escuchar_controles(teclas) {
	document.addEventListener("keydown", (tecla) => {
		activar(tecla.key);
	});

	document.addEventListener("keyup", (tecla) => {
		desactivar(tecla.key);
	});

	function activar(tecla) {
		teclas[tecla.toLowerCase()] = true;
		teclas.actual = tecla.toLowerCase();
	}

	function desactivar(tecla) {
		teclas[tecla.toLowerCase()] = false;
	}
}