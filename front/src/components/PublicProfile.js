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

    componentWillMount = () => {
      this.getRepos();
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
      const { login } = this.props;
      const { username } = this.props.match.params;
        return (
              <main id='profile-page'>
                <Container>
                    <Row>
                        <Col xs='12' lg='3' id='aside-profile' className='my-5'>
                           <ProfileAside username={ username }  />
                        </Col>
                        <Col xs='12' lg='8' id='projects-list' className='ml-auto my-5'>
                            <ProfileRepos
                              getReposList={ this.state.reposList }
                              username={ login }
                              urlUsername={ username }
                            />
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default PublicProfile;
