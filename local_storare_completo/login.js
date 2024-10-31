var formulario = document.getElementById("id_formulario");


formulario.addEventListener('submit', function(event){
 event.preventDefault();

 //GET
 let login = document.getElementById("id_login").value;
 let senha= document.getElementById("id_senha").value;
 let lS = localStorage.getItem("usuario");
//

let obj = JSON.parse(lS);


if (login==obj.login && senha==obj.senha) {
    confirm("Usuário logado com sucesso.")
    window.location.href="principal.html";
}else{
    confirm("Usuário ou senha invalidos.")
}


})

