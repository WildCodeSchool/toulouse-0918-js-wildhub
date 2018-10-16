import React, { Component } from 'react';
import token from '../../../config';
import { Container, Row, Col, Card, CardTitle, CardBody, CardFooter } from 'mdbreact';

class Repo extends Component {

  constructor(props){
    super(props);
    this.state = {
      repo: []
    }
  }

  componentDidMount() {
    const { ownerName, repoName } = this.props.match.params;
    fetch(`https://api.github.com/repos/${ownerName}/${repoName}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(results  =>  results.json())
        .then(repo => {
          this.setState({
            repo: repo
          })
        });
  }

  render() {
    const { repoName } = this.props.match.params;
    const { name } = this.state.repo;
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <CardTitle>
                <div>{name}</div>
              </CardTitle>
              <CardBody></CardBody>
              <CardFooter></CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Repo;
