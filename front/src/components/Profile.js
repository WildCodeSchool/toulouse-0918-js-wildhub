import React, { Component } from 'react';
import ProfileAside from './Profile/ProfileAside';
import ProfileRepos from './Profile/ProfileRepos';
import { Container, Row, Col } from 'mdbreact';
import {token} from '../settings';


class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            reposList: [],
            idActives: []
        };

        this.getRepos = this.getRepos.bind(this);
        this.getReposActive = this.getReposActive.bind(this);
    }

    componentWillMount = () => {
      this.getRepos();
      this.getReposActive();
    }

    getRepos() {
      const username = this.props.login;
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

    getReposActive() {
      const username = this.props.login;
      fetch (`https://wildhub.ssd1.ovh/api/users/${username}/projects`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      })
        .then(results => results.json())
          .then(reposActive => reposActive.map(repo =>
            repo.id
            )
          )
          .then(reposActive => {
            if (!reposActive.length) {
              return [-1]
            }
            return reposActive
          })
            .then(idArr =>
              this.setState({
                idActives: idArr
              })
            )

    }

    render() {
      const { login, theme } = this.props;
      const { username } = this.props.match.params;
      const { idActives } = this.state;

        return (
              <main id='profile-page' className={`${this.props.theme.bgColorDiv}`}>
                <Container>
                    <Row>
                        <Col xs='12' lg='3' id='aside-profile' className='my-5'>
                           { this.state.reposList.length > 0
                           ? <ProfileAside username={ username } theme={this.props.theme}  />
                           : ''
                        }
                        </Col>
                        <Col xs='12' lg='8' id='projects-list' className='ml-auto my-5'>

                        {

                          idActives.length &&
                            <ProfileRepos
                              getReposList={this.state.reposList}
                              username={ login }
                              urlUsername={ username }
                              idActives={ idActives }
                              theme={this.props.theme}
                            />

                        }

                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default Profile;
