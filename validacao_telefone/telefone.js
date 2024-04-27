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

//   const telefone = document.getElementById('idTelefone');
//   const mascaraTelefone = IMask(telefone, {
//     mask: '(+55) 00 0000 0000',
//     lazy: true
//   });