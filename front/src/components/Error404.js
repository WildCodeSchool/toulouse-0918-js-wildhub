import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'mdbreact';
import '../styles/error.scss';

class Error404 extends Component {
    render(){
        return(
            <div id="error">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="p-3">
                            <h1>{"La page que vous cherhez n'existe pas"}</h1>
                            <NavLink to="/"><Button color="elegant">Retour à l'accueil</Button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error404;