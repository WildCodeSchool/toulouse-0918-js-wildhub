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
      this.props.resetLoading(false);
      document.title = "Explorer";
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
                <main id="explore-page" className={`${this.props.theme.bgColorDiv} text-${this.props.theme.colorNavLink}`}>
                <Container fluid className="p-0">
                    <Parallax bgImage={ParallaxImages.image6} strength={600} renderLayer={percentage => (
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

                <Container className='py-5 filter'>
                    <Row>
                      <Col lg="3" xs="6" className="mx-auto text-center pb-5">
                        <Filtre className="pb-5 border-0"
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
                            theme={this.props.theme}
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
