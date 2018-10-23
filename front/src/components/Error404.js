import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Button } from 'mdbreact';

import gif from '../images/gif/5LSi.gif';

class Error404 extends Component {
    render(){
        return(
            <main id="error">
              <Container>
                <Row>
                  <Col className="p-3 text-center">
                    <span className="w-50 d-inline-block"><img src={gif} alt="" className='w-100'/></span>
                    <h2>{"Euh... Tu vois quelque chose?"}</h2>
                    <NavLink to="/" className='d-inline-block'><Button outline color="light">{"Retour à l'accueil"}</Button></NavLink>
                  </Col>
                </Row>
              </Container>
            </main>
        );
    }
}

export default Error404;
