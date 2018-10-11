import React, { Component } from 'react';
import AsideProfile from './AsideProfile'
import Projet from './listProjet'
import { Container, Row, Col } from 'mdbreact';

class Main extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col lg='3' className="my-5">
                        <AsideProfile />
                    </Col>
                    <Col lg='8' id='list-projects' className='ml-auto my-5'>
                        <Projet/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;