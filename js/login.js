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
            document.querySelector('#campoLogin').innerHTML = "retLogin";
            document.querySelector('#campoPassword').innerHTML = "retPass";
        };
  
//incluir o envio ao BD pra conferência de login e senha (pode ser um por vez)
let checkLogin = 0;
let checkSenha = 0;

    function fetchApiSubmitLogin() {
        
            const email = document.querySelector('#campoLogin').value;
            const senha = document.querySelector('#campoPassword').value;
            
        
            const update = {
                email: email,
                senha: senha,
                
            };
                
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(update),
            };
        
            fetch("https://web-api-form.herokuapp.com/user", options)
            .then(data => {
                if(!data.ok) {
                    throw Error(data.status);
                }
                return data.json();
            })
            .then(update => {console.log(update);})
            .catch(e => {console.log(e);});
        
        
        if (checkLogin === 1) {
            if (checkSenha === 1){
               divLogin.style.display = 'none';
               respost.innerHTML = `Olá, nome`
            } else {respost.innerHTML = "Senha errada!"}
        }else{respost.innerHTML = "Login errado!"}
    };



         /* salva o nome dele quando faz a busca */