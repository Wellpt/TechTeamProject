let modal = document.querySelector('.formulario-modal');
let formcoleta = document.querySelector ('.modal-doacao');
let formlogin = document.querySelector ('.modalLogin');

function abrir() {
    modal.style.display = 'block';
}

function fechar(){
    modal.style.display = 'none';
}

function abrirdoacao() {
    formcoleta.style.display = 'block';    
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

