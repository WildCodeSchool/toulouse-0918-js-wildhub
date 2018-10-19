import React, { Component } from 'react';
import RepoDescription from './Profile/ListProjects/DisplayRepo/RepoDescription';
import AsideRepo from './Profile/ListProjects/DisplayRepo/AsideRepo';
import { Container, Row, Col } from 'mdbreact';
import token from '../config';

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
    const { repo, files } = this.state;

    fetch(`https://wildhub.ssd1.ovh/api/users/${ownerName}/${repoName}`)
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
  }

  render() {
    const { ownerName, repoName } = this.props.match.params;
    const { repo, files } = this.state;
    return (
      <main id='repo-page'>
        <Container className='py-5'>
          <Row className='flex-column-reverse flex-lg-row'>
            <RepoDescription repo={repo} files={files} ownerName={ownerName} repoName={repoName}/>
            <AsideRepo ownerName={ownerName} repo={repo}/>
          </Row>
        </Container>
      </main>
   )
  }
}

export default Repo;
