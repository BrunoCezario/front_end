var formulario = document.getElementById("id_formulario");


formulario.addEventListener('submit', function(event){
 event.preventDefault();

 let nome= document.getElementById("id_nome").value;
 let documento= document.getElementById("id_documento").value;
 let login = document.getElementById("id_login").value;
 let senha= document.getElementById("id_senha").value;

let usuario ={
    nome:nome,
    documento:documento,
    login:login,
    senha:senha
 };

 
 localStorage.setItem("usuario", JSON.stringify(usuario))

 confirm("Usuário Cadastrado com sucesso.")

 window.location.href="login.html";

})

