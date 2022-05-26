//* Detección de tecleo y reacción correspondiente.
export default function escuchar_controles(jugador) {
	document.addEventListener("keydown", (tecla) => {
		switch (tecla.key) {
			case "d":
				jugador.velocidad.x = 10;
				break;
			case "a":
				jugador.velocidad.x = -10;
				break;
		}
	});

	document.addEventListener("keyup", (tecla) => {
		switch (tecla.key) {
			case "d":
				jugador.velocidad.x = 0;
				break;
			case "a":
				jugador.velocidad.x = 0;
				break;
		}
	});
}