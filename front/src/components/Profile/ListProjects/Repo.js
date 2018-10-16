import React, { Component } from 'react';
import token from '../../../config';
import ReactTooltip from 'react-tooltip';
import Raw from './DisplayCode/Raw';
import { Container, Row, Col, Card, CardTitle, CardBody, CardFooter, Button, Fa } from 'mdbreact';

class Repo extends Component {

  constructor(props){
    super(props);
    this.state = {
      repo: {}
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
    const { name, html_url, description, created_at, updated_at, url } = this.state.repo;
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <CardTitle>
                <div>{ name }</div>
              </CardTitle>
              <CardBody>
                <a
                  href={ html_url }
                  target='_blank'
                  rel="noopener noreferrer"
                  className="ghIcon"
                  data-tip data-for={`tip-repo-1`}
                >
                  <Fa icon="github"/>
                </a>
                <ReactTooltip
                  id={`tip-repo-1`}
                  place="left"
                  type="dark"
                  effect="solid"
                >
                  Voir dans GitHub
                </ReactTooltip>
                <div>{ description }</div>
              </CardBody>


            {/*Affichage du README RAW COLOR SYNTAX*/}
              {url && <Raw url={ url } />}

              <CardFooter>
                <div>
                  { created_at }
                  { updated_at }
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Repo;
