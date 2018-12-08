import React, { Component } from 'react';
import { Container, Row, Col, Fa } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import '../styles/footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer>
              <Container fluid className="text-center pt-4 pb-3" >
                  <Row>
                      <Col >
                          <p>Made with <Fa icon="heart" className="text-danger" /> by <NavLink to='/team' ><span className="fedra-text">wild</span>Hub team</NavLink></p>
                      </Col>
                  </Row>
              </Container>
            </footer>
        );
    }
}

export default Footer;
