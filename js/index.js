let read1 = document.querySelector('#leiaMais1');
let read2 = document.querySelector('#leiaMais2');
let text1 = document.querySelector('#textoArtigoHidden1');
let text2 = document.querySelector('#textoArtigoHidden2');
let closeText1 = document.querySelector('#fecharLeiaMais1');
let closeText2 = document.querySelector('#fecharLeiaMais2');
let divArt2esq = document.querySelector('#art2esq');
let divArt2dir = document.querySelector('#art2dir');

read1.addEventListener('click', () => {
    read1.style.display = 'none';
    text1.style.display = 'flex';
    closeText1.style.display = 'flex';
});
read2.addEventListener('click', () => {
    read2.style.display = 'none';
    text2.style.display = 'flex';
    closeText2.style.display = 'flex';
});
closeText1.addEventListener('click', () => {
    read1.style.display = 'flex';
    text1.style.display = 'none';
    closeText1.style.display = 'none';
});
closeText2.addEventListener('click', () => {
    read2.style.display = 'flex';
    text2.style.display = 'none';
    closeText2.style.display = 'none';
});


//LIMPA FORMULÁRIO DE CONTATO APÓS ENVIO
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};