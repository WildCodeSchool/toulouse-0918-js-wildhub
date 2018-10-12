import React, { Component } from 'react';
import Navbar from './Navbar';
import AsideProfile from './AsideProfile';
import ListProjects from './ListProjects';
import Footer from './Footer';
import { Container, Row, Col } from 'mdbreact';
import '../styles/ListProjects.scss';


class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            reposList: []
        };
    }

    componentWillMount = () => {
      this.getRepos();
    }

    getRepos = () => {
      fetch ('https://api.github.com/users/JulesGrenier/repos')

      .then(result => result.json())

      .then(repoArr => {
          const promises = repoArr.map(
            repoSingle => fetch(repoSingle.languages_url)

              .then(result => result.json())
          )

          return Promise.all(promises)
            .then(languages => languages.map(
              (language, idx) => Object.assign(repoArr[idx], {language_stat: language})
            ))
            .then(repos => this.setState({reposList:repos}))
      })
    }

    render() {
        return (
            <div id='profile-page'>
                <Navbar />
                <main>
                  <Container>
                      <Row>
                          <Col className='col-lg-3 my-5'>
                              <AsideProfile getReposList={this.state.reposList} />
                          </Col>
                          <Col className='col-lg-8 ml-auto my-5'>
                              <ListProjects getReposList={this.state.reposList} />
                          </Col>
                      </Row>
                  </Container>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Profile;
