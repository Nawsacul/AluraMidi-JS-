function tocaSom (seletorAudio) {
	const elemento = document.querySelector(seletorAudio);

	if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
	} 
	else {
		console.log('Erro');
	}
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//Enquanto
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

	const tecla = listaDeTeclas[contador];
	const instrumento = tecla.classList[1];
	const idAudio = `#som_${instrumento}`;//Template String

	tecla.onclick = function () {
		tocaSom(idAudio);
	}

	tecla.onkeydown = function (evento) {

		/* Operador "==" compara o valor e dá o resultado, exemplo:
		1 (valor numérico) == "1" (por estar em aspas, texto)
		true
		--------------------------------------------------------
		 Operador "===" compara não só o valor, mas o tipo do dado, exemplo:
		 1 === "1"
		 false
		*/
		if(evento.code === "Enter" || evento.code === "Space"){
			tecla.classList.add('ativa');
		}
	}

	tecla.onkeyup = function () {
		tecla.classList.remove('ativa');
	}
}
