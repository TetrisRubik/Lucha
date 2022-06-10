//* Detección de tecleo y reacción correspondiente.
export default function escuchar_controles(teclas) {
	document.addEventListener("keydown", (tecla) => {
		switch (tecla.key) {
			case "A":
			case "a":
				teclas.a.activa = true;
				teclas.actual = "a";
				break;
			case "W":
			case "w":
				teclas.w.activa = true;
				teclas.actual = "w";
				break;
			case "D":
			case "d":
				teclas.d.activa = true;
				teclas.actual = "d";
				break;
			case "ArrowLeft":
				teclas.izquierda.activa = true;
				teclas.actual = "izquierda";
				break;
			case "ArrowUp":
				teclas.arriba.activa = true;
				teclas.actual = "arriba";
				break;
			case "ArrowRight":
				teclas.derecha.activa = true;
				teclas.actual = "derecha";
				break;
		}
	});

	document.addEventListener("keyup", (tecla) => {
		switch (tecla.key) {
			case "A":
			case "a":
				teclas.a.activa = false;
				break;
			case "W":
			case "w":
				teclas.w.activa = false;
				break;
			case "D":
			case "d":
				teclas.d.activa = false;
				break;
			case "ArrowLeft":
				teclas.izquierda.activa = false;
				break;
			case "ArrowUp":
				teclas.arriba.activa = false;
				break;
			case "ArrowRight":
				teclas.derecha.activa = false;
				break;
		}
	});
}