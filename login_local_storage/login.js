
function confereUsuario(event){
    event.preventDefault(); 
    let login = localStorage.getItem('login');
    
    let pass = localStorage.getItem('senha');

    var usuario= document.getElementById("idLogin");
    var senha = document.getElementById("idSenha");

    if (login==usuario.value && pass==senha.value) {
        
        alert("USUÁRIO LOGADO COM SUCESSO");
        window.location.href = "./principal.html";  
    }else{
        alert("USUÁRIO   E SENHA INVÁLIDOS");
    }

}
