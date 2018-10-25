import React, { Component } from 'react';
import { Container, Row } from 'mdbreact';
import {token} from '../settings';
import RepoDetails from './Repo/RepoDetails';
import RepoAside from './Repo/RepoAside';

class Repo extends Component {

  constructor(props){
    super(props);
    this.state = {
      repo: {},
      files: [],
    }
  }

  componentDidMount() {
    const { ownerName, repoName } = this.props.match.params;

    (window.location.href.includes('/explore/'))
    ? fetch(`https://wildhub.ssd1.ovh/api/users/${ownerName}/${repoName}`)
    : fetch(`https://api.github.com/repos/${ownerName}/${repoName}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(results  =>  results.json())
        .then(repo => {
          this.setState({
            repo: repo
          })
        });
        fetch(`https://api.github.com/repos/${ownerName}/${repoName}/contents`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(results  =>  results.json())
          .then(files => {
            this.setState({
              files: files
            })
          })
          .then(this.props.resetLoading(false))
  }

  render() {
    const { ownerName, repoName } = this.props.match.params;
    const { repo, files } = this.state;

    return (
      <main id='repo-page' className={`${this.props.theme.bgColorDiv}`}>
        <Container className='py-5'>
          <Row className='flex-column-reverse flex-lg-row'>

            {
              files.length &&
              <RepoDetails theme={this.props.theme} repo={repo} files={files} ownerName={ownerName} repoName={repoName} />
            }

            {
              !files.length &&
              <RepoDetails theme={this.props.theme} repo={repo} files={files} ownerName={ownerName} repoName={repoName} />
            }

            <RepoAside theme={this.props.theme} ownerName={ownerName} repo={repo} />
          </Row>
        </Container>
      </main>
   )
  }
}

export default Repo;
