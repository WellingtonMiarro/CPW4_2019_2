import React, { Component } from 'react';
import Menu from '../../components/menu/Menu';

import './Estilo.scss';


import email from '../../img/email.png';
import git from '../../img/git.png';
import linkedir from '../../img/linkedir.png';
import cv from '../../img/cv.jpg';
import insta from '../../img/insta.png';
import tt from '../../img/twitter.png';

export default class Contato extends Component {
    render() {
        return (
            <div>
                <Menu inicio="/" bio="/bio"  contato="/contato"/>
                
                <div className="main">
                         <h2>Entre em Contato</h2>

                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDXmXSnPfJpDNDFVsvKDKrQWBkjbbZxprVJNCdNjMTDLJjtbnjlLHkksgFdzBjQGCDcvnnF" target="blank" >
                         <img src={email} alt="E-mail"  title="Envie me um E-mail" />
                        </a>
                         
                         <a href="https://www.linkedin.com/in/wellington-miarro-8956a1155/" target="blank" >
                         <img src={linkedir} alt="Linkedin"  title="Acesse meu Linkedin!"/>
                         </a>

                         <a href="https://github.com/WellingtonMiarro" target="blank" >
                         <img src={git} alt="Github" title="Veja meus projetos no Github!" />
                         </a>  

                          <h2>Curriculum Vitae</h2>
                    
                        <a href=" http://lattes.cnpq.br/2237420719944000" target="blank" >
                            <img src={cv} alt="Curriculum" id="cv" title="Acesse meu Curriculum!"/>
                        </a>                      
                             
                         <h2>Redes Sociais</h2>
                    
                        <a href="https://www.instagram.com/whellingtonmiarro/?hl=pt-br" target="blank" >
                            <img src={insta} alt="Instagram" title="Me siga no Instagram!"/>
                        </a> 

                        <a href="https://twitter.com/whellingtonMF" target="blank" >
                            <img src={tt} alt="Twitter" title="Me siga no Twitter!"/>
                        </a>
                         
                         
                </div>
                
            </div>
        );
    }
}