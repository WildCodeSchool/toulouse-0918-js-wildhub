import React, { Component } from 'react';
import ProfileAside from './Profile/ProfileAside';
import ProfileRepos from './Profile/ProfileRepos';
import { Container, Row, Col } from 'mdbreact';
import {token} from '../settings';


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
      const { username } = this.props.match.params;
      fetch (`https://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      .then(result => result.json())

      .then(repoArr => {
          const promises = repoArr.map(
            repoSingle => fetch(repoSingle.languages_url, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })

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
      const { username } = this.props.match.params;
        return (
              <main id='profile-page'>
                <Container>
                    <Row>
                        <Col xs='12' lg='3' id='aside-profile' className='my-5'>
                           { this.state.reposList.length > 0
                           ? <ProfileAside username={username}  />
                           : ''
                        }
                        </Col>
                        <Col xs='12' lg='8' id='projects-list' className='ml-auto my-5'>
                            <ProfileRepos getReposList={this.state.reposList} />
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default Profile;
