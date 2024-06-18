function ajustaNumeros(v) {
    // Remove os caracteres não numéricos
    v.value = v.value.replace(/\D/g, "");
  }

  function limpaCampos() {
    // Limpa valores do formulário de cep.
    $("#rua").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#uf").val("");
    $("#ibge").val("");
}

$(document).ready(function(){
   
    $("#cep").blur(function(){
        var cep = $('#cep').val().replace(/\D/g, '');
        
        if(cep){
            var url = 'https://viacep.com.br/ws/'+cep+'/json/';
            $.ajax({
                    url: url,
                    success : function(dados){
                        if(dados.logradouro){
                            $("#rua").val(dados.logradouro);
                            $("#bairro").val(dados.bairro);
                            $("#cidade").val(dados.localidade);
                            $("#uf").val(dados.uf);
                            $("#ibge").val(dados.ibge);
                        }
                        else {
                            //CEP pesquisado não foi encontrado.
                            limpaCampos();
                            alert("CEP não encontrado.");
                        }
                    }
            });
        }                   
    }); 
});