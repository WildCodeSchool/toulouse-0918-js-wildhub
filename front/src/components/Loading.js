import React, { Component } from 'react';
import logo from '../img/logo.png'

class Loading extends Component {
    render() {
        return (
        <path className="wrap">
            <img className="circles" src={logo} />
        </path>
  
        );
    }
}

export default Loading;