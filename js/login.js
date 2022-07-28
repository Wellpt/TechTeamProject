document.addEventListener("DOMContentLoaded", () => {
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
            let retLogin = getCookie('logindosite');
            let retPass = getCookie('passworddosite');
            document.querySelector('#campoLogin').innerHTML = retLogin;
            document.querySelector('#campoPassword').innerHTML = retPass;
        };
    
  });

let checkLogin = 0;
let checkSenha = 0;
if (retLogin != ""){
    app.get('/login/:email?', (req, res) => {
       
       //removido. mas tem que ser testado antes de deletar
        /* let filter = '';//essa aqui confere campos vazios? dá pra sair já que não vai existir nenhum vazio?
        if (req.params.email) filter = ` WHERE email = '${req.params.email}'`;//essa aqui eu não sei o que faz
        execSQLQuery('SELECT email FROM login' + filter, res);//isso aqui busca os dados da tabela, né? pode sair? */
        checkLogin=1;
    });
    app.get('/login/:senha?', (req, res) => {

        //removido. mas tem que ser testado antes de deletar
        /* let filter = '';//essa aqui confere campos vazios? dá pra sair já que não vai existir nenhum vazio?
        if (req.params.senha) filter = ` WHERE senha = '${req.params.email}'`;//essa aqui eu não sei o que faz
        execSQLQuery('SELECT senha FROM login' + filter, res);//isso aqui busca os dados da tabela, né? pode sair? */
        checkSenha=1;
    });

};

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
});



function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
        host     : HOST,
        user     : USER,
        password : PASSWORD,
        database : DATABASE
    });
   
    connection.query(sqlQry, (error, results, fields) => {
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
};
let respost = document.querySelector('#respost');
let divLogin = document.querySelector('#modalLogin');
//faz a bagaça aqui rodrigo, acorda
let fetchApiSubmitLogin = () => {
    if (checkLogin) {
        if (checkSenha){
            divLogin.style.display = 'none';
            /* salva o nome dele quando faz a busca */
            respost.innerHTML = `Olá, nome`
        } else {respost.innerHTML = "Senha errada"}
    }else{respost.innerHTML = "Login errado"}
};