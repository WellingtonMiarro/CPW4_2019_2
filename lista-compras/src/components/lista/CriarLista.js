import React, { Component } from 'react';
import Menu from '../menu/Menu';
import anterior from '../../img/paginaAnterior.png';

import ListaService from '../../services/ListaService';

export default class CriarLista extends Component {

    state = {
        nome: ''
    }

    aoAlterarNome = (event) => {
        const nome = event.target.value;
        this.setState({ nome }); // recebe o valor que o usuario digitou no campo 
        
    }

    salvar = (event) => { 
        event.preventDefault(); //Previne o comportamento padrao do formulario, que é recarregar a página.
        const service = new ListaService();
        const lista = this.state;
        service.salvar(lista);
        /*
        Faz o encaminhamento da pagina inicial do app 
        */ 
       this.props.history.push('/');
    }


    render() {
        return (
            <div>
                <Menu paginaAnterior="/" titulo="Criar Lista" logo={anterior}></Menu>

                <form  id="formNovaLista" onSubmit={this.salvar}>
                    <input 
                    type="text" 
                    name="nome"
                    value={this.state.nome}
                    required
                    placeholder="Digite o nome da lista"

                    onChange={this.aoAlterarNome}
                    />

                    <input type="submit" value="Criar" />
                </form>
                
            </div>
        )
    }
}
