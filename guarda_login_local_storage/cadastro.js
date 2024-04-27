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

