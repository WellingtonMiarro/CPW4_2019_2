import React, { Component } from 'react';

import voltar from '../img/voltar.png';

import Header from '../components/Header';

import './VisualizarSerie.scss'
export default class VisualizarSerie extends Component {
    render() {

        const {serie, imagem } = this.props.location.state;
        const dados = serie.show;
        console.log(dados);
        

        let generos = dados.genres[0];
        const quantidadeGenero = dados.genres.length;
        if(quantidadeGenero > 1){
            for(let i = 1; i < quantidadeGenero; i++){
                generos += `, ${dados.genres[i]}`;
            }
        }else{
            generos = "Não Informado";
        }
        const titulo = dados.name;
        const lingua = dados.language ? dados.language : ' Não Informado ';

      /**
       * let canalTV = '';
        if(dados.network){
            canalTV = dados.network.name;
        }
       */
      const canalTV = dados.network ? dados.network.name : '';
      const canalWeb = dados.webChannel ? dados.webChannel.name : '';
      const { status } = dados;

      //Expressão regular para remover tags da strings
    
      const regex = /(<([^>]+)>)/ig;
      const sinopse = dados.summary ? dados.summary.replace(regex, '') : 'Não Informado';
        


        return (
            <div>
                <Header
                enderecoPaginaAnterior="/"
                logo={ voltar }
                titulo=" Visualizar Série"
                />

                <div id="areaCartaz">
                    <img src={imagem} alt="Cartaz"/>
                </div>

                <div id="areaDadosSerie">
                     <h2> { titulo } </h2>

                     <span className="nomeCampo">Gênero:</span>
                     <span > { generos } </span>

                     <br/>

                     <span className="nomeCampo">Língua:</span>
                     <span> { lingua }</span>
                     <br/>
                     
                     
                     {
                         //condição logica caso tenha algo para exibir
                         canalTV &&  
                         <div>
                              <span className="nomeCampo">Canal TV:</span> 
                              <span 
                              > { canalTV } </span>
                               <br/>
                        </div>
                     }

                     {
                         //condição logica caso tenha algo para exibir
                         canalWeb && 
                         <div>
                            <span className="nomeCampo">Streaming:</span>
                            <span > { canalWeb } </span>
                            <br/>
                         </div>
                     }

                     <span className="nomeCampo">Status:</span>
                     <span> { status } </span>
                     <br/>

                     
                     <span className="nomeCampo">Sinopse:</span>
                     <div id="sinopse">  { sinopse } </div>

                </div>



            </div>
        )
    }
}
