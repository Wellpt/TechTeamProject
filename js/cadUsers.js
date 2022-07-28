function fetchApiSubmit() {
    
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;
    const nome = document.querySelector('#nome').value;
    const cpfCnpj = document.querySelector('#cpfCnpj').value;
    const telefone = document.querySelector('#telefone').value;
    const areaAtuacao = document.querySelector('#areaAtuacao').value;
    const id_coletor_doador = document.querySelector('.radio').value;
    const update = {
        email: email,
        senha: senha,
        nome: nome,
        cpfCnpj: cpfCnpj,
        telefone:telefone,
        areaAtuacao: areaAtuacao,
        id_coletor_doador: id_coletor_doador
    };
        
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    };
   
    
        fetch(`https://web-api-form.herokuapp.com/user`, options)
        .then(data => {
            if(!data.ok) {
                throw Error(data.status);
            }
            return data.json();
        })
        .then(update => {console.log(update);})
        .catch(e => {console.log(e);});
    
}