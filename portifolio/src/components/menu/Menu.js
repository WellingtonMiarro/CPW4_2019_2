import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Menu.scss';

class Menu extends Component {
  render() {
    return (
      <div className="menu">

          <span>Wellington Miarro Ferreira</span>
             <ul>
                 <li>
                     <Link to={this.props.inicio}>Início</Link>
                 </li>

                 <li>
                     <Link to={this.props.bio}>Bio</Link>
                 </li>
                 <li>
                     <Link to={this.props.contato}>Contato</Link>
                 </li>
             </ul>
      </div>
    );
  }
}
export default Menu;