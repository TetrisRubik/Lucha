//* Detección de tecleo y reacción correspondiente.
export default function escuchar_controles(presión) {
	document.addEventListener("keydown", (tecla) => {
		switch (tecla.key) {
			case "d":
				presión.d.presionado = true;
				break;
			case "a":
				presión.a.presionado = true;
				break;
		}
	});

	document.addEventListener("keyup", (tecla) => {
		switch (tecla.key) {
			case "d":
				presión.d.presionado = false;
				break;
			case "a":
				presión.a.presionado = false;
				break;
		}
	});
}