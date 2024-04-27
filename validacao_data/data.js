const telefone = document.getElementById('idTelefone');
  const mascaraTelefone = IMask(telefone, {
    mask: '(+55) 00 0000 0000',
    lazy: true
  });

  function ajustaCpf(v) {
    v.value = v.value.replace(/\D/g, "");
    v.value = v.value.replace(/^(\d{3})(\d)/, "$1.$2");
    v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");
    v.value = v.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  function ajustaNumeros(v) {
    // Remove os caracteres não numéricos
    v.value = v.value.replace(/\D/g, "");
  }
  
  function ajustaTelefone(v) {
    v.value = v.value.replace(/\D/g, "");
    //Adiciona parênteses no DDD
    v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
    //Adiciona hífen no número do telefone
    v.value = v.value.replace(/(\d{4})(\d)/, "$1-$2");
  }
  
  function maiuscula(texto) {
    texto.value = texto.value.toUpperCase();
  }
  
  function ajustaData(v) {
    v.value = v.value.replace(/\D/g, "");
    //Adiciona a barra entre o dia e o mês
    v.value = v.value.replace(/^(\d{2})(\d)/, "$1/$2");
    //Adiciona a barra entre o mês e o ano
    v.value = v.value.replace(/(\d{2})(\d)/, "$1/$2");
  }

  function validarCPF(cpf) {	
	cpf = cpf.value.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
    confirm("CPF inválido")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))	
    confirm("CPF inválido")	
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
  confirm("CPF inválido")
		return false;		
	return true;   
};


  const cpfInput = document.getElementById("idDocumento");
  cpfInput.addEventListener("input", function() {
    const cpf = cpfInput.value.trim();
    if (cpf.length !== 14) {
        
    } else {
      clearError("cpf-error");
    }
  });

function gravarUsuario(event){
    event.preventDefault(); 
    var nome= document.getElementById("idNome");
    var documento = document.getElementById("idDocumento");
    var login= document.getElementById("idLogin");
    var senha = document.getElementById("idSenha");
    
    if(nome.value!=''
    && documento.value!='' 
    && login.value!='' 
    && senha.value!=''){
      
    localStorage.setItem('login', login.value);
     localStorage.setItem('senha', senha.value);
    
    alert("CADASTRO EFETUADO COM SUCESSO");
      
    window.location = "./login.html";  
  
    }else  {
        alert("PREENCHA OS CAMPOS CORRETAMENTE");
    }

}

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
  
  
//     const nome = document.getElementById('nome').value;
//     const dataNascimento = document.getElementById('dataNascimento').value;
//     const sexo = document.getElementById('sexo').value;
//     const nomeMaterno = document.getElementById('nomeMaterno').value;
//     const CPF = document.getElementById('CPF').value;
//     const telefoneCelular = document.getElementById('telefoneCelular').value;
//     const telefoneFixo = document.getElementById('telefoneFixo').value;
//     const cep = document.getElementById('cep').value;
//     const endereco = document.getElementById('endereco').value;
//     const numero = document.getElementById('numero').value;
//     const complemento = document.getElementById('complemento').value;
//     const login = document.getElementById('login').value;
//     const senha = document.getElementById('senha').value;
  
//     const formData = {
//       nome: nome,
//       dataNascimento: dataNascimento,
//       sexo: sexo,
//       nomeMaterno: nomeMaterno,
//       CPF: CPF,
//       telefoneCelular: telefoneCelular,
//       telefoneFixo: telefoneFixo,
//       cep: cep,
//       endereco: endereco,
//       numero: numero,
//       complemento: complemento,
//       login: login,
//       senha: senha
//     };
  
//     localStorage.setItem('cadastroData', JSON.stringify(formData));
  
//     window.location.href = 'login.html';
//   });