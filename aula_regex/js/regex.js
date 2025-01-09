function executarRegex(event) {

	event.preventDefault();

	limparResultados();
	var valores= pegaValoresDoForm();

    var resultados = criarRegex(valores);
    
    imprimirResultado(resultados);
    destacarResultados(resultados, valores.target);
}


function criarRegex(valores) {

	var textoPattern = valores.pattern; 
	var textoTarget  = valores.target;
	var mostraIndex  = valores.mostraIndex;
	var mostraGrupos = valores.mostraGrupos;
	var resultados	 = [];
    var resultado 	 = null;

	var objetoRegex  = new RegExp(textoPattern, 'g');


	while (resultado = objetoRegex.exec(textoTarget)) {

		if(resultado[0] === "") {
			throw Error("Regex retornou vazio.");
		}

		//console.log("Resultado: " + resultado[0]);

		resultados.push(gerarResultado(mostraGrupos ? resultado.join(' ||| ') : resultado[0], resultado.index, objetoRegex.lastIndex, mostraIndex));
	}

	
	logaTempoDeExecucao(textoPattern, textoTarget);

	return resultados;
}


function gerarResultado(resultado, index, lastIndex, mostraIndex) {

	var textoIndex = mostraIndex ? " [" + index + "-" + lastIndex+ "]" : ""

	return {
		'resultado': resultado + textoIndex,
		'index': index,
		'lastIndex': lastIndex
	};
}


function logaTempoDeExecucao(textoPattern, textoTarget) {
	var pObjetoRegex  = new RegExp(textoPattern, 'g');
    var ini = performance.now();
    pObjetoRegex.test(textoTarget)
	var fim =  performance.now();
	console.log("Tempo de execução (ms) " + (fim-ini));
}


function imprimirResultado(resultados) {
	var inputResultado 	= document.querySelector('#resultado');
	var labelResultado 	= document.querySelector('#labelResultados');

    labelResultado.innerHTML = (resultados.length) + " Matches (resultados)";

	var resultadosComoArray = resultados.map(function(item){ 
		return item.resultado;
	});
	
	labelResultado.innerHTML = (resultadosComoArray.length) + " Matches (resultados)";

    if(resultadosComoArray.length > 0) {
    	inputResultado.value = resultadosComoArray.join(' | ');
    	inputResultado.style.borderStyle = 'solid';
    	inputResultado.style.borderColor = 'lime';//verde
    } else {
    	inputResultado.placeholder = 'Sem matches (resultados)';
    	inputResultado.value = '';
    	inputResultado.style.borderStyle = 'solid';
    	inputResultado.style.borderColor = 'red';
    }
}


function destacarResultados(resultados, texto) {	
	var item = null;
	var indexBegin = 0;
	var conteudo = "";

	while((item = resultados.shift()) != null) {
		conteudo += semDestaque(escapeHtml(texto.substring(indexBegin, item.index)));
		conteudo += comDestaque(escapeHtml(texto.substring(item.index, item.lastIndex)));
		indexBegin = item.lastIndex;
	}

	
	if((texto.length - indexBegin) > 0) {
		conteudo += semDestaque(escapeHtml(texto.substring(indexBegin, texto.length)));
	}
	
	document.querySelector("#highlightText").innerHTML = conteudo;
}



function semDestaque(texto) {
	return texto;
	//return "<s>" + texto + "</s>";
}

function comDestaque(texto) {
	return "<span class='bg-primary'>" + texto + "</span>";
}

function escapeHtml( string ) {
     return string.replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}	


function pegaValoresDoForm() {

	var inputTarget 	= document.querySelector('#target');
	var inputPattern 	= document.querySelector('#pattern')
	inputPattern.focus();

	verificarInputs(inputTarget, inputPattern);

  	console.log('Target:  ' + inputTarget.value);
  	console.log('Pattern: ' + inputPattern.value.trim());

  	return {'target': inputTarget.value.trim(), 
  			'pattern': inputPattern.value}
  			
}

function verificarInputs(inputTarget, inputPattern) {
	if(!inputTarget.value) {
		inputTarget.placeholder = 'Digite um texto';
	}

	if(!inputPattern.value) {
		inputPattern.placeholder = 'Digite uma expressão';
	}

	if(!inputTarget.value || !inputPattern.value) {
		throw Error('Valores invalidos');
	}
}

function limparResultados() {
	console.clear();
	document.querySelector('#labelResultados').innerHTML = '0 Matches (resultados)';
	document.querySelector('#resultado').value = '';
	document.querySelector('#resultado').placeholder = 'sem resultado';
	document.querySelector("#highlightText").innerHTML = '<em>sem resultado</em>';

}

