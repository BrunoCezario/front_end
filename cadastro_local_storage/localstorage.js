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
 
  

const form = document.getElementById('formulario');
var count = 1;


form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('idNome').value;
    const documento = document.getElementById('idDocumento').value;
    const telefone = document.getElementById('idTelefone').value;
    const login = document.getElementById('idLogin').value;
    const senha = document.getElementById('idSenha').value;
   
    const formCadastro = {
      ID:'usuario'+'-'+ count,
      nome: nome,
      documento: documento,
      telefone: telefone,
      login: login,
      senha: senha,
    };
  
  localStorage.setItem('formCadastro'+ count, JSON.stringify(formCadastro));
  confirm('Usuário cadastrado com Sucesso.');
    count++;
  });