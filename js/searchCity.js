const cityRegistered = [
{'name':'Ana Carolina',
'UF':'Minas Gerais',
'city': 'Belo Horizonte'},
{'name':'Rafael Medeiros',
'UF':'Rio Grande do Sul',
'city':'Montenegro' },
{'name':'Maria Feliciana',
'UF':'São Paulo',
'city':'São Paulo'},
{'name':'Jéssca Santos',
'UF':'Minas Gerais',
'city':'Belo Horizonte'},
{'name':'Cia de produtos agrícolas',
'UF':'Minas Gerais',
'city':'Belo Horizonte'},
{'name':'Escola Fundamental Passo de Anjo',
'UF':'Rio Grande do Sul',
'city':'Porto Alegre'},
];
/* let listSelected = document.querySelector('#cidadescadastradas').value;
console.log(listSelected)
let listSelection = [];
if (citySelected.value = ""){
    listSelection = cityRegistered;
} else{
    listSelection = cityRegistered.slice(listSelected.value)
} */
function insertHeader(){
    for (i=0; i< cityRegistered.length; i++){
  
        var codeBlock = 
        '<div class="retangEnderecos">' + 
        '<ul>' + 
            `<li>Nome: ${cityRegistered[i].name}</li>` + 
        ` <li>Estado: ${cityRegistered[i].UF}</li>` + 
        ` <li class="cityId">Cidade: ${cityRegistered[i].city}</li>` + 
        '</ul>' + 
         ` <a id="btnConnect" href="/link pra registrar ponto ao coletor"><img src="./Imagens/conecte-se.png" alt="botao pra conectar os dois"></a>` + 
         '</div>';
        document.querySelector('.listaPontosdeColeta').innerHTML += codeBlock;
   }
};
insertHeader();
