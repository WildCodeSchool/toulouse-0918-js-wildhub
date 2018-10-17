import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Button } from 'mdbreact';
import Navbar from './Navbar';
import '../styles/error.scss';

class Error404 extends Component {
    render(){
        return(
            <div id="error">
              <Navbar/>
              <Container className="h-100">
                <Row className="align-items-center h-100">
                  <div className="p-3">
                    <h1>{"La page que vous cherchez n'existe pas"}</h1>
                    <NavLink to="/"><Button color="elegant">{"Retour à l'accueil"}</Button></NavLink>
                  </div>
                </Row>
              </Container>
            </div>
        );
    }
}

export default Error404;
