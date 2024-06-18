function ajustaNumeros(v) {
    // Remove os caracteres não numéricos
    v.value = v.value.replace(/\D/g, "");
  }

  function limpaCampos() {
    // Limpa valores do formulário de cep.
    $("#capital").val();
    $("#areaTotal").val();
    $("#regiao").val();
    $("#lingua").val();
}


$(document).ready(function(){
   
    $("#pais").blur(function(){
        var pais = $('#pais').val();
        
        if(pais){
            var url = 'https://servicodados.ibge.gov.br/api/v1/paises/'+pais;
            $.ajax({
                    url: url,
                    success : function(data){
 
                        if(data[0]){
                            $("#capital").val(data[0].governo.capital.nome);
                            $("#areaTotal").val(data[0].area.total);
                            $("#regiao").val(data[0].localizacao.regiao.nome);
                            $("#lingua").val(data[0].linguas[0].nome);
                        }
                        else {
                            //CEP pesquisado não foi encontrado.
                            limpaCampos();
                            alert("Pais inválido.");
                        }
                    }
            });
        }                   
    }); 
});