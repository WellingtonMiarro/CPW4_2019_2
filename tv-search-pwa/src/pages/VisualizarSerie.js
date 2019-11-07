import React, { Component } from 'react';
import voltar from '../img/voltar.png';

import Header from '../components/Header';

export default class VisualizarSerie extends Component {
    render() {
        return (
            <div>
                <Header
                enderecoPaginaAnterior="/"
                logo={ voltar }
                titulo=" Visualizar Série"
                />
            </div>
        )
    }
}
