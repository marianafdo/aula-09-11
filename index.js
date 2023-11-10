const sqlite3 = require('sqlite3');
const express = require('express');
const srv = express();

srv.get('/nome/:nome', (req,res) => {
    const db = new sqlite3.Database('mensagens.db');
    const sql = `SELECT nome,msg FROM mensagens WHERE nome = ?`;
    db.get(sql, [req.params.nome], (erro, linhas)=>{
        if(erro) throw erro;
        console.table(linhas)
        res.send(linhas)
}); 
})

/*srv.get('/dizoi/:nome', (req,res)=>{
    const db = new sqlite3.Database('mensagens.db');
    const sql = `SELECT nome,msg FROM mensagens WHERE nome=?`;
    db.get(sql, [req.params.nome], (erro, linhas) => {
        if(erro) throw erro;
        res.json[linhas]
    });
});*/

srv.listen(6060, ()=>{
    console.log(`Pronto para começar.`);
});