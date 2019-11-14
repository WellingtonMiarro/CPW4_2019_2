import React, { Component } from 'react';
import Loading from 'react-loading';

import logo from '../img/logo.png';
import imgDefault from '../img/imgDefault.png';
import Header from '../components/Header';
import SeriesService from '../services/SeriesService';

import './Pesquisar.scss';

export default class Pesquisar extends Component {

    constructor(){
        super();

        this.state = {
            series:[], // traz do servico TV...
            carregando: false,// falso pq assumi que nao esta fazendo pesquisa na api   // quando for true exibi a animacao 
            textoPesquisa:''
        }
        this.service = new SeriesService();
    }

    pesquisar = event => {
        const consulta = event.target.value;
        // seta para true a flag carregando , sinalizzando que a animacao de loading deve ser exibida 
        this.setState({
            carregando: true,
            textoPesquisa: consulta,
            series: [] //nao exibi nada enquanro realiza a pesquisa 
        });

        this.service
        .pesquisar(consulta)
        .then(resposta => this.setState({ // guarda no vetor de series
                series: resposta.data,
                carregando: false
            }))
        .catch(erro => { 
            console.log(erro);
            this.setState({carregando: false})
        });
    }


    render() {
        const {series, textoPesquisa} = this.state; 
        const listaSerie = series.map(serie => {
        let imagem = imgDefault;

            if(serie.show.image && serie.show.image.medium){
                imagem = serie.show.image.medium;
            }
       return (
            <div key={serie.show.id} className="serie">    
                <img src={imagem} alt="Cartaz da série"/>
                <span>{serie.show.name}</span>
            </div>
        )});
        //coloca na minha condicao logica deixando o codigo mais legivel
        const naoTemResultadoParaExibir = listaSerie.length === 0;

        const usuarioEstaPesquisando = textoPesquisa.length > 0;



        return (
            <div>
               <Header 
                enderecoPaginaAnterior="/"
                logo={ logo }
                titulo=" TV Search"
               />

                <div id="areaPesquisa">
                     <input 
                        value={this.state.textoPesquisa}
                        id="campoPesquisa"
                        onChange={this.pesquisar}
                        type="text"
                        placeholder="Digite o nome da série"
                        
                     /> 
                 </div>

                { 
                    //se o valor da for true renderiza carregando 
                    this.state.carregando && 
                    <div id="areaLoading">
                        <Loading 
                        id="animacao"
                        type="spin"
                        color= "#006992"
                        height="60px"
                        width="60px"
                        />
                     </div>
                }

                 <div id="areaResultados">
                     {
                         (naoTemResultadoParaExibir && usuarioEstaPesquisando) && 
                         <span>Nenhuma série encontrada :( </span>
                     }
                     {listaSerie}
                 </div>
               
            </div>
        )
    }
}
