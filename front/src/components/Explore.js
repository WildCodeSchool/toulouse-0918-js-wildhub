import React, { Component, Fragment } from 'react';
import {
    Container,
    Row,
    Col
} from 'mdbreact';
import RepoCard from './Repo/RepoCard';
import '../styles/explore.scss';
import { Parallax } from "react-parallax";
import ParallaxImages from '../data/ParallaxImages.js';
import Filtre from './Filtre';

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
      this.props.resetLoading(false);
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
                <main id="explore-page" className={`${this.props.theme.bgColorDiv} text-${this.props.theme.colorNavLink}`}>
                <Container fluid className="p-0">
                    <Parallax bgImage={ParallaxImages.image6} strength={800} renderLayer={percentage => (
                        <div>
                            <div
                                style={{
                                    position: "absolute",
                                    background: `rgba(0, 0, 0, ${percentage * 1})`,
                                    left: "50%",
                                    top: "50%",
                                    borderRadius: "50%",
                                    transform: "translate(-50%,-50%)",
                                    width: percentage * 400,
                                    height: percentage * 400
                                }}
                            />
                        </div>
                    )}>
                        <Row className="align-items-center">
                            <Col xs='12' className="head-explore mx-auto p-0">
                                <h2 className="text-center text-white" >Projets des Wilders</h2>
                                <div  className="mx-auto mt-4 bg-white" style={{ height: '5px', width: '300px', borderRadius: '2px'}}  />
                            </Col>
                        </Row>
                    </Parallax>
                </ Container >

                <Container className='py-5'>
                  <Row>
                    <Col xs="12" className="mx-auto pb-5">
                      <Filtre className="pb-5"
                        getByLanguage={this.getByLanguage}
                      />
                    </Col>
                  </Row>
                  
                    <Row className="mt-3" >
                      {
                        repos.map((repo, index) =>
                          <RepoCard
                            theme={this.props.theme}
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
