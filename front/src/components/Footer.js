import React, { Component } from 'react';
import { Container, Row, Col, Fa } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import styled from 'react-emotion';


const Foo = styled('footer')(
    props => ({
      backgroundColor: props.bgColor,
      color: props.color
    })
  )

class Footer extends Component {
    render() {
        return (
            <Foo bgColor={this.props.theme.bgColor} color={this.props.theme.color}>
              <Container fluid className="text-center pt-4 pb-3" >
                  <Row>
                      <Col >
                          <p>Made with <Fa icon="heart" className="text-danger" /> by <NavLink to='/team'><u><span className="fedra-text">wild</span>Hub team</u></NavLink></p>
                      </Col>
                  </Row>
              </Container>
            </Foo>
        );
    }
}

export default Footer;
