import React, { Component } from 'react';
import token from '../../../config';
import ReactTooltip from 'react-tooltip';
import Raw from './DisplayCode/Raw';
import { Container, Row, Col, Card, CardTitle, CardBody, CardFooter, Button, Fa } from 'mdbreact';

class Repo extends Component {

  constructor(props){
    super(props);
    this.state = {
      repo: {},
      files: [],
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
        fetch(`https://api.github.com/repos/${ownerName}/${repoName}/contents`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(results  =>  results.json())
          .then(files => {
            this.setState({
              files: files
            })
          })
  }

  render() {
    const { repoName } = this.props.match.params;
    const { name, html_url, description, created_at, updated_at, url } = this.state.repo;
    const readmeObj = this.state.files.filter(x=>x.name==='README.md')
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


                {/*Affichage du README RAW COLOR SYNTAX*/}
                {
                  this.state.files.length &&
                  <Raw readmeObj={readmeObj[0]}/>
                }


              </CardBody>

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
