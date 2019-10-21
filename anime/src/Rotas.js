import React  from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicio from './pages/Inicio';
import ListaAnime from './pages/ListaAnime';
import Completo from './pages/Completo';

import ROTAS from './constant/rotas';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={ROTAS.INICIO} component ={Inicio}/>
            <Route exact path={ROTAS.LISTAANIME} component ={ListaAnime}/>
            <Route exact path={ROTAS.COMPLETO} component ={Completo}/>
         </Switch>
    </BrowserRouter>
);
export default Rotas;