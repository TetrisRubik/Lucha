//* Detección de tecleo y reacción correspondiente.
export default function escuchar_controles(presión) {
	document.addEventListener("keydown", (tecla) => {
		switch (tecla.key) {
			case "ArrowLeft":
			case "a":
				presión.a.presionado = true;
				presión.última_tecla = "a";
				break;
			case "ArrowUp":
			case "w":
				presión.w.presionado = true;
				presión.última_tecla = "w";
				break;
			case "ArrowRight":
			case "d":
				presión.d.presionado = true;
				presión.última_tecla = "d";
				break;
		}
	});

	document.addEventListener("keyup", (tecla) => {
		switch (tecla.key) {
			case "ArrowLeft":
			case "a":
				presión.a.presionado = false;
				break;
			case "ArrowRight":
			case "d":
				presión.d.presionado = false;
				break;
			case "w":
				presión.w.presionado = false;
				break;
		}
	});
}