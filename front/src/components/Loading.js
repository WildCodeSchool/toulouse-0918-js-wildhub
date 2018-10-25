import React, { Component } from 'react';
import logo from '../images/logo-accueil.png'

class Loading extends Component {
    render() {
        return (
        <div className="wrap">
            <img className="circles" src={logo} alt={logo} />
        </div>
  
        );
    }
}

export default Loading;