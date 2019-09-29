import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Route, MemoryRouter} from 'react-router-dom';

//importe do enzyme
import {shallow, configure, mount} from 'enzyme';
import  Adapter from 'enzyme-adapter-react-16';


import Inicio from './Inicio';
import Sobre from './Sobre';
import Contato from './Contato';

configure({adapter: new Adapter()});
let patMap = {};

describe('Testando rotas no APP', ()=>{
  beforeAll(()=>{
    const component = shallow(<App/>)
    patMap = component.find(Route).reduce((patMap,route) =>{
      const routeProps = route.props();
      patMap[routeProps.path] = routeProps.component
      return patMap;
      }, {});
  })

  test('/inicio carrega o componente INICIO', () =>{
    expect(patMap['/inicio']).toBe(Inicio);
  });

  test('/sobre carrega o componente SOBRE', () =>{
    expect(patMap['/sobre']).toBe(Sobre);
  });

  test('/contato carrega o componente CONTATO', () =>{
    expect(patMap['/contato']).toBe(Contato);
  });

  test('/Incio utilizando Memoria Route', () =>{
    const envolope = mount(
      <MemoryRouter iniciaEntries={['/Inicio']}>
       <App/>
      </MemoryRouter>
    );
    expect(envolope.find(Inicio)).toHaveLength(1);
  });

});
