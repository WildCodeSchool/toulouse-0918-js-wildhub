import React, { Component } from 'react';
import { Container, Row, Col, Fa } from 'mdbreact';

class Footer extends Component {
    render() {
        return (
            <Container fluid className="bg-dark text-light text-center pt-5 pb-5">
                <Row>
                    <Col style={{fontSize: '20px'}}>
                        <p>Made with <Fa icon="heart" className="text-danger" /> by wildHub team</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;