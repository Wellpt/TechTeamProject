function fetchApiPesquisa() {
    const url = 'https://web-api-form.herokuapp.com/';
    const cidade = document.querySelector('#nomeCidade'); 
        
    fetch(`${url}pontocoleta/${cidade.value.toUpperCase()}`)
        .then((response) => {return response.json()})
        .then((data) => {
            const ul = document.querySelector('.container-cidade')
            ul.innerHTML = "";

            data.forEach((item) => {                                
                    ul.innerHTML += `
                    <div class="mostraCidades">
                        <div class="mostra">
                            <p>Nome: ${item.nome}</p>
                            <p>Cidade: ${item.cidade}</p>
                            <p>Telefone: ${item.telefone}</p>
                            Data de Coleta: ${item.data_coleta}
                        </div>
                    </div>`
            })
        })  
}

function fetchApiPesquisaTodos() {
    const url = 'https://web-api-form.herokuapp.com/';    
        
    fetch(`${url}pontocoleta`)
        .then((response) => {return response.json()})
        .then((data) => {
            const ul = document.querySelector('.container-cidades')
            ul.innerHTML = "";

            data.forEach((item) => {                                
                    ul.innerHTML += `
                    <div class="mostraCidades">
                        <div class="mostra">
                            <p>Nome: ${item.nome}</p>
                            <p>Cidade: ${item.cidade}</p>
                            <p>Telefone: ${item.telefone}</p>
                            Data de Coleta: ${item.data_coleta}
                        </div>
                    </div>`
            })
        })  
}