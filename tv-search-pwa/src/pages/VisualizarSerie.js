import React, { Component } from 'react';

import voltar from '../img/voltar.png';

import Header from '../components/Header';

export default class VisualizarSerie extends Component {
    render() {

        const {serie, imagem } = this.props.location.state;
        const dados = serie.show;
        

        let generos = dados.genres[0];
        const quantidadeGenero = dados.genres.length;
        if(quantidadeGenero > 1){
            for(let i = 1; i < quantidadeGenero; i++){
                generos += `, ${dados.genres[i]}`;
            }
        }


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
                     <h2> { dados.name } </h2>
                     <spam id="generos">  { generos }  </spam>

                </div>






            </div>
        )
    }
}
