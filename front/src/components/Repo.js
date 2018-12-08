import React, { Component } from 'react';
import { Container, Row } from 'mdbreact';

import RepoDetails from './Repo/RepoDetails';
import RepoAside from './Repo/RepoAside';

class Repo extends Component {

  constructor(props){
    super(props);
    this.state = {
      repo: {}
    }
  }

  componentDidMount() {
    const { ownerName, repoName } = this.props.match.params;
    document.title = `${repoName} - ${ownerName}`;

    (window.location.href.includes('/explore/'))
    ? fetch(`https://wildhub.ssd1.ovh/api/users/${ownerName}/${repoName}`)
    : fetch(`https://api.github.com/repos/${ownerName}/${repoName}`, {
      headers: {
        Authorization: `Bearer ${this.props.accessToken}`
      }
    })
      .then(results  =>  results.json())
      .then(repo => {
        this.setState({
          repo: repo
        })
      })
      .then(this.props.resetLoading(false))
  }

  render() {
    const { ownerName, repoName } = this.props.match.params;
    const { repo } = this.state;

    return (
      <main id='repo-page'>
        <Container className='py-5'>
          <Row className='flex-column-reverse flex-lg-row'>

            <RepoDetails
              theme={this.props.theme}
              accessToken={this.props.accessToken}
              repo={repo}
              ownerName={ownerName}
              repoName={repoName}
            />

            <RepoAside
              theme={this.props.theme}
              ownerName={ownerName}
              repo={repo}
            />
          </Row>
        </Container>
      </main>
   )
  }
}

export default Repo;
