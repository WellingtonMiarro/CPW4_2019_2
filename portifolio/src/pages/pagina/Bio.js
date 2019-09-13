import React, { Component } from 'react';
import Menu from '../../components/menu/Menu';
import './Estilo.scss';

export default class Bio extends Component {
    render() {
        return (
            <div>
                <Menu inicio="/" bio="/bio"  contato="/contato"/>

                <div className="main">
                       
                <h1>Um pouco sobre ...</h1>

                <p>
                    Olá, me chamo <strong>Wellington Miarro Ferreira</strong> tenho 22 anos e nasci em 08/01/1997 na cidade de Aquidauana –
                Mato Grosso do Sul -MS. Me formei no ensino médio no ano de 2015, pela Escola Estatual Professora Dóris Mendes 
                Trindade. No ano seguinte (2016) conheci o 
                <a target="_blank" rel="noopener noreferrer" href="http://www.ifms.edu.br/"> Instituto Federal de Mato Grosso Do Sul - IFMS</a>, onde ingressei no curso
                Técnico em Informática, o curso possuía duração de 1 ano e meio. Logo quando terminei o curso de T.I no final de 
                2017 me interessei bastante pela área, me preparei para ingressar no curso superior de <a target="_blank" rel="noopener noreferrer" href="http://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet">Tecnólogo em Sistemas para internet - TSI</a>, 
                atualmente estou matriculado no 4º semestre. 
                </p>
                
                <p>
                 Mesmo o curso possuindo inúmeras opções, pretendo seguir a área de Desenvolvimento Web,
                 pois é uma das áreas que me identifico muito.
                 Durante o curso é visto inúmeros métodos e diversos assuntos voltado a área de desenvolvimento. 
                </p>

                </div>
                
            </div>
        );
    }
}