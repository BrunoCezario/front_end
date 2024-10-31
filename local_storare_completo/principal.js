 
let lS = localStorage.getItem("usuario");
var teste = JSON.parse(lS);

let novoElemento = document.createElement("div");
let t = document.createTextNode("Boa Noite: " + teste.nome + " - " + teste.documento);

novoElemento.appendChild(t);

let div_hidden= document.getElementById('div_teste')

document.body.insertBefore(novoElemento, div_hidden);



