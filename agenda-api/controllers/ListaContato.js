const ListaContato = require ('../models/ListaContato');


let contatos = [];

const controller = {
    
    recuperarTodas: (req, res) =>  res.json(contatos),
    salvar: (req, res) => {

      const nome = req.body.nome;
      const telefone = req.body.telefone;
      const email = req.body.email;
      const idade = req.body.idade;

      
       if(nome,telefone){
          let contato = new ListaContato(nome,telefone,email,idade);
          contatos.push(contato);
          res.status(201).json(contato);
        } else{
            res.status(400).json({mensagemErro:'Nome não informado!!!'});
         }
         //SEM VALIDAÇÃO DE NOME E TELEFONE NÃO CONCLUIDA
          

       }
      
       
};

module.exports = controller;