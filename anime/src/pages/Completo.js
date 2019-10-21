import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from '../../src/components/menu/Menu';
import volta from '../../src/img/seta1.jpg';

import ListaService from '../../src/services/ListaServices';
import rotas from '../../src/constant/rotas';
import Axios from 'axios';

import './AnimEstilo.scss';
export default class ListaAnime extends Component {

    constructor(props){
        super(props);
    
        this.state= {
            animes: [],
            anime: this.props.location.state.anime.nome 
        };
        this.service = new ListaService();
      }
    
     async componentDidMount(){
        let URL = 'https://api.jikan.moe/v3/search/anime?q=' + this.state.anime; 
        Axios.get(URL)
       .then(res => {
           const animes = res.data.results;
           console.log(animes)
           this.setState({animes});
        })
        .catch(ex => {
            console.log('Falha', ex)
        });
    }
    
    render() {
        const animeList =
            this.state.animes.map(anime => (
                <Link
                    to={
                        {
                            pathname: rotas.COMPLETO,
                            state: { anime }
                        }
                    }
                    key={anime.mal_id}>
                    <div className="icon">
                        <img className="imagem" src={anime.image_url} />
                        <div className="text">{anime.title} </div>
                        <div className="text">{anime.synopsis}</div>
                    </div>
                </Link>
            ));
                    
        return (
            <div>
                <Menu paginaAnterior="/" titulo="Web Anime" logo={volta}/>            
                
               {animeList}

            </div>
            
           
        );
    }
}