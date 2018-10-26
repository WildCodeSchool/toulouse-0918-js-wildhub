import React, { Component } from 'react';
import ProfileAside from './Profile/ProfileAside';
import ProfileRepos from './Profile/ProfileRepos';
import { Container, Row, Col } from 'mdbreact';


class PublicProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            reposList: []
        };
    }

    componentDidMount(){
      this.getRepos();
      this.props.resetLoading(false);
      document.title = this.props.match.params.username;
    }

    getRepos = () => {
      const { username } = this.props.match.params;
      fetch (`https://wildhub.ssd1.ovh/api/users/${username}/projects`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      })
      .then(result => result.json())
      .then(repoArr => this.setState({reposList:repoArr}))
    }

    render() {
      const { login, theme } = this.props;
      const { username } = this.props.match.params;
        return (
              <main id='profile-page' className={`${this.props.theme.bgColorDiv}`}>
                <Container>
                    <Row>
                        <Col xs='12' lg='3' id='aside-profile' className='my-5'>
                           <ProfileAside username={ username } theme={theme} />
                        </Col>
                        <Col xs='12' lg='8' id='projects-list' className='ml-auto my-5'>
                            <ProfileRepos
                              getReposList={ this.state.reposList }
                              username={ login }
                              urlUsername={ username }
                              theme={theme}
                            />
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default PublicProfile;
