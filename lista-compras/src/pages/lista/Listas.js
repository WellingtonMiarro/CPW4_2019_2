import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import  Menu from '../../components/menu/Menu';
import logo from '../../img/logo.png';
import adicionar from '../../img/adicionar.png'

import ListaService from '../../services/ListaService';

import './Lista.scss';
class Listas extends Component {
  constructor(){
    /** 
    Toda vez que criar um construtor em um componente react, 
    lembre-se de invocar o construtor da classe mae Component na primeira linha de codigo
    */
  super();

    this.state = { // Sao os dados manipulados que serao exibidos
      listas: []
    }
    this.service = new ListaService(); //acessa o backend
  }

  async componentDidMount(){ // foi renderizado: é fazer aparecer os dados na tela 

    //const listasRecuperadas 
    const listas = await this.service.recuperarListas(); // puxar os dados do backend e colocar no .state (array listas)
    this.setState({listas}); //this.setState({listas: listasRecuperadas });
   
  }


  render() {
    const listas = this.state.listas.map(lista =>(
      <div className="item" key={lista._id}>{lista.nome}</div>
    ));
    return (
      <div >
        <Menu 
        logo={logo}
        paginaAnterior="/"
        titulo="Lista de Compras"/>

        <div className="conteiner">
            <div>
              {
                /**
                 * O operador '&& -> entao faça isso aqui...' atua como um operador de ligação logica  e o codigo de apresentação a ser renderizado
                 */
              !this.state.listas &&
               <h2>Minhas Listas</h2>
              }

              {
                this.state.listas &&
               <p id="mensagemNenhumaLista">
                  Cadastre sua primeira lista de Compras, Clique no botão abaixo!
               </p>
              }

              <div id="listagem">
                  {listas}
              </div>

              <div id="areaBotao">
                <div id="botaoNovaLista">
                  <Link to="/criarlista">
                    <img src={adicionar} alt="Nova Lista" />
                   </Link>
                </div>
                
              </div>

            </div>
        </div>   
        
      </div>
    );
  }
}
export default Listas;