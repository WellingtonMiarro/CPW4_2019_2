class ListaContato {
    constructor(nome,telefone,email,idade){
        this.nome = nome;
        this.telefone = telefone ; 
        this.email = email;
        this.idade = idade;    
        this.contatos = [];

        
    }
}
module.exports = ListaContato;