import React, { Component } from 'react';
import '../styles/loading.scss';

class Loading extends Component {
    render() {
        return (
        <div id="loading-screen">
            <img className="logo" src={this.props.theme.logo} alt="" />
        </div>
  
        );
    }
}

export default Loading;