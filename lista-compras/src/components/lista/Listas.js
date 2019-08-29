import React, { Component } from 'react';

import  Menu from '../menu/Menu';
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

    this.state = {
      listas: []
    }
    this.service = new ListaService();
  }

  async componentDidMount(){

    //const listasRecuperadas 
    const listas = await this.service.recuperarListas();
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
              <h2>Minhas Listas</h2>
              <div id="listagem">
                  {listas}
              </div>

              <div id="areaBotao">
                <div id="botaoNovaLista">
                   <img src={adicionar} alt="Nova Lista" />
                </div>
                
              </div>

            </div>
        </div>   
        
      </div>
    );
  }
}
export default Listas;