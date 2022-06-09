//* Detección de tecleo y reacción correspondiente.
export default function escuchar_controles(presión) {
	document.addEventListener("keydown", (tecla) => {
		switch (tecla.key) {
			case "A":
			case "a":
				presión.a.presionado = true;
				presión.tecla_actual = "a";
				break;
			case "W":
			case "w":
				presión.w.presionado = true;
				presión.tecla_actual = "w";
				break;
			case "D":
			case "d":
				presión.d.presionado = true;
				presión.tecla_actual = "d";
				break;
			case "ArrowLeft":
				presión.izquierda.presionado = true;
				presión.tecla_actual = "izquierda";
				break;
			case "ArrowUp":
				presión.arriba.presionado = true;
				presión.tecla_actual = "arriba";
				break;
			case "ArrowRight":
				presión.derecha.presionado = true;
				presión.tecla_actual = "derecha";
				break;
		}
	});

	document.addEventListener("keyup", (tecla) => {
		switch (tecla.key) {
			case "A":
			case "a":
				presión.a.presionado = false;
				break;
			case "W":
			case "w":
				presión.w.presionado = false;
				break;
			case "D":
			case "d":
				presión.d.presionado = false;
				break;
			case "ArrowLeft":
				presión.izquierda.presionado = false;
				break;
			case "ArrowUp":
				presión.arriba.presionado = false;
				break;
			case "ArrowRight":
				presión.derecha.presionado = false;
				break;
		}
	});
}