import React, { Component, Fragment } from 'react';
import ReactTooltip from 'react-tooltip';
import { Container, Row, Col, Card, CardBody, CardTitle, CardFooter, Fa } from 'mdbreact';
import DisplayRepoCatalogue from './DisplayRepoCatalogue';

class CatalogueIdees extends Component {

    constructor(props) {
      super(props);
      this.state = {
        repos: []
      }
    }

    componentDidMount(){
      this.getExplore();
    }

    getExplore() {
        fetch('https://wildhub.ssd1.ovh/api/projects')
            .then(results  =>  results.json())
            .then(repos  => {
                this.setState({
                    repos: repos
                });
            });
    }

    render() {
        const { repos } = this.state;
        return (
            <Fragment>
                <main id="explore-page">
                <Container className='py-5'>
                    <Row className="align-items-center">
                        <Col xs='12' className="mx-auto mb-5 text-center">
                            <h2 className="text-left">Projets des Wilders</h2>
                            <div style={{ height: '8px', background: 'blue' }}  />

                        </Col>
                    </Row>


                    <Row className="mt-3" >

                      {
                        repos.map((repo, index) =>
                          <DisplayRepoCatalogue repo={repo} index={index}/>
                        )
                      }


                    </Row>
                </Container>
                </main>
            </Fragment>
        );
    }
}

export default CatalogueIdees;
