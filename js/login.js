let divLogin = document.querySelector('#modalInternLogin');
let respost = document.querySelector('#respost');    
let retLogin = "";
let retPass = "";


    
    //função para retornar os cookies
    let getCookie = (ckName) => {
        var nameEQ = ckName + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    };

//salva na var se diferente de vazio
//essas var serão usadas na API que confere no MySQL
        if (getCookie('logindosite') !=''){
             retLogin = getCookie('logindosite');
             retPass = getCookie('passworddosite');
            document.querySelector('#campoLogin').innerHTML = retLogin;
            document.querySelector('#campoPassword').innerHTML = retPass;
        };
  

let checkLogin = 0;
let checkSenha = 0;
if (retLogin != ""){
    

};





    function fetchApiSubmitLogin() {
        if (checkLogin) {
            if (checkSenha){
               divLogin.style.display = 'none';
               respost.innerHTML = `Olá, nome`
            } else {respost.innerHTML = "Senha errada!"}
        }else{respost.innerHTML = "Login errado!"}
    };



         /* salva o nome dele quando faz a busca */