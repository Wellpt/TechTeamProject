let modal = document.querySelector('.formulario-modal');
let formcoleta = document.querySelector ('.form-coleta');

function abrir() {
    modal.style.display = 'block';
}

function fechar(){
    modal.style.display = 'none';
}

function abrirdoacao() {
    formcoleta.style.display = 'flex';    
}

function fechardoacao() {
    formcoleta.style.display = 'none';
}

