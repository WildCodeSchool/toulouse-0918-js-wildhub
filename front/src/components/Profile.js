import React, { Component } from 'react';
import ProfileAside from './Profile/ProfileAside';
import ProfileRepos from './Profile/ProfileRepos';
import { Container, Row, Col } from 'mdbreact';
import '../styles/profile.scss';



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

    componentDidMount(){
      Promise.all([
        this.getRepos(),
        this.getReposActive()
      ]).then(this.props.resetLoading(false))
    }

    getRepos() {
      const username = this.props.login;
      return fetch (`https://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: `Bearer ${this.props.accessToken}`
        }
      })

      .then(result => result.json())

      .then(repoArr => {
          const promises = repoArr.map(
            repoSingle => fetch(repoSingle.languages_url, {
              headers: {
                Authorization: `Bearer ${this.props.accessToken}`
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
      return fetch (`https://wildhub.ssd1.ovh/api/users/${username}/projects`, {
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
      const { login } = this.props;
      const { username } = this.props.match.params;
      const { idActives } = this.state;

        return (
              <main id='profile-page'>
                <Container>
                    <Row>
                        <Col xs='12' lg='3' id='aside-profile' className='my-5'>
                           { this.state.reposList.length > 0
                           ? <ProfileAside username={ username } accessToken={this.props.accessToken}  />
                           : ''
                        }
                        </Col>
                        <Col xs='12' lg='9' id='projects-list' className='ml-auto my-5'>

                        {

                          idActives.length &&
                            <ProfileRepos
                              getReposList={this.state.reposList}
                              username={ login }
                              urlUsername={ username }
                              idActives={ idActives }
                              accessToken={this.props.accessToken}
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
