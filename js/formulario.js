let modal = document.querySelector('.formulario-modal');
let formcoleta = document.querySelector ('.modal-doacao');
let formlogin = document.querySelector ('.modalLogin');
let nomFantasia = document.querySelector ('#nome');

function abrir() {
    modal.style.display = 'block';
    nomFantasia.focus();  
}

function fechar(){
    modal.style.display = 'none';
}

function abrirdoacao() {
    formcoleta.style.display = 'block';
    nomFantasia.focus();   
}



function fechardoacao() {
    formcoleta.style.display = 'none';
      
}

function abrirLogin() {
    
    formlogin.style.display = 'block';
}

function fecharLogin() {
    formlogin.style.display = 'none';
}

function fetchApiSubmitLogin() {
    const url = 'https://web-api-form.herokuapp.com/';
    const campoLogin = document.querySelector('#campoLogin');
    const campoPassword = document.querySelector('#campoPassword');
    
    fetch(url + campoLogin.value)
        .then((response) => {return response.json()})
        .then(
            fetch(url + campoPassword.value)
                .then((response) => {return response.json()})
                .then(
                    alert('Login realizado com sucesso.')
                    )
        )    
}

