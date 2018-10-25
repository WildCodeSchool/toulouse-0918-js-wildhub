import React, { Component, Fragment } from 'react';
import {
    Container,
    Row,
    Col
} from 'mdbreact';
import RepoCard from './Repo/RepoCard';
import Filtre from './Filtre'

class Explore extends Component {

    constructor(props) {
      super(props);
      this.state = {
        repos: []
      }
      this.postRepoExplore = this.postRepoExplore.bind(this)
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

    postRepoExplore(repo) {
      (repo.active !== 1) ? repo.active = 1 : repo.active = 0;
      fetch('https://wildhub.ssd1.ovh/api/projects', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(repo)
      } )
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

                    <Row>
                      <Col xs="12" className="mx-auto pb-5">
                        <Filtre className="pb-5"
                          repo={repos}
                        />
                      </Col>
                    </Row>

                    <Row className="mt-3" >

                      {
                        repos.map((repo, index) =>
                          <RepoCard
                            repo={repo}
                            key={index}
                            name={repo.name}
                            postRepoExplore={() => this.postRepoExplore(repo)}
                          />
                        )
                      }


                    </Row>
                </Container>
                </main>
            </Fragment>
        );
    }
}

export default Explore;
