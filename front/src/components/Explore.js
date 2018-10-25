import React, { Component, Fragment } from 'react';
import {
    Container,
    Row,
    Col
} from 'mdbreact';
import RepoCard from './Repo/RepoCard';
import Filtre from './Filtre'
import octocat_filtre from '../images/octocat_filtre.png'

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

    getExplore = () => {
        fetch('https://wildhub.ssd1.ovh/api/projects')
            .then(results  =>  results.json())
            .then(repos  => {
                this.setState({
                    repos: repos
                });
            });
    }

    getByLanguage = (language) => {
      fetch(`https://wildhub.ssd1.ovh/api/projects/by-language/${language}`)
      .then(response => response.json())
      .then(repos => this.setState({ repos: repos }))
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
                          getByLanguage={this.getByLanguage}
                          getExplore={this.getExplore}
                        />
                      </Col>
                    </Row>

                    <Row className="mt-3" >

                      {
                        repos.length
                       ?
                         repos.map((repo, index) =>
                          <RepoCard
                            repo={repo}
                            key={index}
                            name={repo.name}
                            postRepoExplore={() => this.postRepoExplore(repo)}
                          />
                        )
                        :
                        <div className="mx-auto text-center">
                          <div className="mx-auto text-center">
                            <img fluid src={octocat_filtre} className="octocat_filtre" alt="octocat" />
                          </div>
                          <div className="text-align-center" style={{ fontSize: '1.5rem' }}>Aucun repository de ce langage n'est actuellement disponible !</div>
                        </div>
                      }

                    </Row>
                </Container>
                </main>
            </Fragment>
        );
    }
}

export default Explore;
