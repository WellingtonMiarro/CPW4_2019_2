import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Pesquisa from './pages/Pesquisar';
import Visualizar from './pages/VisualizarSerie'

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Pesquisa}/>
            <Route exact path="/serie" component={Visualizar}/>
        </Switch>
    </BrowserRouter>
);
export default Rotas;