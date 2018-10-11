import React, { Component } from 'react';
import logo from '../img/logo.png';
import '../index.css';

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