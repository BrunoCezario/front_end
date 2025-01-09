function preencherDados(v){

var sigla = v.value;

var url = 'https://servicodados.ibge.gov.br/api/v1/paises/' + sigla;

fetch(url)
.then(function (response){
     return response.json();
})
.then(function(data){
  // preencher os dados na tela 
  if(!data.erro){
    document.getElementById('idNome').value= data[0].governo.capital.nome;
    document.getElementById('idArea').value = data[0].area.total;
    document.getElementById('idRegiao').value = data[0].localizacao.regiao.nome;
    document.getElementById('idLingua').value = data[0].linguas[0].nome;
   }
  
})
.catch(function(error){
  console.log('Ocorreu um erro:', error);
});

}