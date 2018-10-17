import React, { Component } from 'react';
import { Container, Row, Col, Fa } from 'mdbreact';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer>
              <Container fluid className="bg-dark text-light text-center pt-5 pb-5">
                  <Row>
                      <Col style={{fontSize: '20px'}}>
                          <p>Made with <Fa icon="heart" className="text-danger" /> by <NavLink to='/team' className='text-white'><u>wildHub team</u></NavLink></p>
                      </Col>
                  </Row>
              </Container>
            </footer>
        );
    }
}

export default Footer;
