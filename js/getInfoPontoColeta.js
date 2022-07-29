function fetchApiPesquisa() {
    const url = 'https://web-api-form.herokuapp.com/';
    const cidade = document.querySelector('#nomeCidadePesquisa'); 
        
    fetch(`${url}pontocoleta/${cidade.value}`)
        .then((response) => {return response.json()})
        .then((data) => {
            const ul = document.querySelector('.ul-vazia')
            ul.innerHTML = "";

            data.forEach((item) => {                                
                    ul.innerHTML += `<li>Nome: ${item.nome}</li><br>
                    <li>Cidade: ${item.cidade}</li><br>
                    <li>Telefone: ${item.telefone}</li><br>
                    <li>Data de Coleta: ${item.data_coleta}</li>`
            })
        })  
}