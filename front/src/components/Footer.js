import React, { Component } from 'react';
import { Container, Row, Col, Fa } from 'mdbreact';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer>
              <Container fluid className="grad-dark text-light text-center pt-4 pb-3">
                  <Row>
                      <Col >
                          <p>Made with <Fa icon="heart" className="text-danger" /> by <NavLink to='/team' className='text-white'><u><span className="fedra-text">wild</span>Hub team</u></NavLink></p>
                      </Col>
                  </Row>
              </Container>
            </footer>
        );
    }
}

export default Footer;
