import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
// props sao dados que serao passado para o componente 
const Header = props =>(
    <div className="header">
        <Link to={props.enderecoPaginaAnterior}>
            <img src={props.logo} alt="Logo"/>
        </Link>
        <span>{props.titulo}</span>
    </div>
);
export default Header;