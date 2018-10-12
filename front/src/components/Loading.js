import React, { Component } from 'react';
import '../index.css';
import logo from '../images/loading.png'

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