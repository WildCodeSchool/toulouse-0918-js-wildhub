import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Button } from 'mdbreact';

class Error404 extends Component {
    render(){
        return(
            <main id="error">
              <Container>
                <Row>
                  <div className="p-3">
                    <h1>{"La page que vous cherchez n'existe pas"}</h1>
                    <NavLink to="/"><Button outline color="light">{"Retour à l'accueil"}</Button></NavLink>
                  </div>
                </Row>
              </Container>
            </main>
        );
    }
}

export default Error404;
