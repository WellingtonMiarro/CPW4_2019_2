import React, { Component } from 'react';

import  Menu from '../../src/components/menu/Menu';
import logo from '../../src/img/logo1.jpg';

import ROTAS from '../../src/constant/rotas';

import './AnimEstilo.scss';
export default class Inicio extends Component { 
  
    state = {
        nome: ''
    }

    aoAlterarNome = (event) => {
        const nome = event.target.value;
        this.setState({ nome });
        
    }

    consultar = (event) => { 
       event.preventDefault();

        const anime = this.state;
        this.props.history.push({ 
            pathname: ROTAS.LISTAANIME,
            state: { anime: anime }
          });
    }
 
  
    render() { 
      
        return ( 
            <div>
             <Menu  logo={logo} titulo="Web Anime"/>

            <div className="conteiner" onSubmit={this.consultar}>
                 <form  id="formNovaLista" >
                    <input 
                    type="text" 
                    name="nome" 
                    value={this.state.nome}
                    required
                    placeholder="Digite o nome do seu anime"  
                    onChange={this.aoAlterarNome}
                
                    />
                    <input type="submit" value="Buscar"  />
                  </form>    
              </div>  


           </div>
        )
    }
}