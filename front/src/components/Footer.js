import React from 'react';
import { Container, Row, Col, Fa } from 'mdbreact';

const Footer = () => {
      return (
          <footer>
            <Container fluid className="bg-dark text-light text-center pt-4 pb-3">
              <Row>
                <Col >
                  <p>Made with <Fa icon="heart" className="text-danger" /> by <span className="fedra-text">wild</span>Hub team</p>
                </Col>
              </Row>
            </Container>
          </footer>
      );
}

export default Footer;
