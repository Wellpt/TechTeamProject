function fetchApiSubmit() {
    const nome = document.querySelector('#nome').value;
    const cep = document.querySelector('#cep').value;
    const bairro = document.querySelector('#bairro').value;
    const logradouro = document.querySelector('#logradouro').value;
    const numero = document.querySelector('#numero').value;
    const cidade = document.querySelector('#cidade').value;
    const estado = document.querySelector('#estado').value;
    const quantidade = document.querySelector('#quantidade').value;
    const data = document.querySelector('#data').value;
    const hora = document.querySelector('#hora').value;
    const frequencia = document.querySelector('#frequencia').value;
    
    const update = {
        nome: nome,
        cep: cep,
        bairro: bairro,
        logradouro: logradouro,
        numero: numero,
        cidade: cidade,
        estado: estado,
        quantidade: quantidade,
        data: data,
        hora: hora,
        frequencia: frequencia

    };
        
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    };
   
    
        fetch(`https://web-api-form.herokuapp.com/pontocoleta`, options)
        .then(data => {
            if(!data.ok) {
                throw Error(data.status);
            }
            return data.json();
        })
        .then(update => {console.log(update);})
        .catch(e => {console.log(e);});
    
}