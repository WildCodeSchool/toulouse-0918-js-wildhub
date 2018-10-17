import React, { Component, Fragment } from 'react';
import RepoDescription from './RepoDescription';
import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

class Repo extends Component {

  render() {
    const { ownerName, repoName } = this.props.match.params;
    return (
      <Fragment>
        <Navbar/>
        <RepoDescription ownerName={ownerName} repoName={repoName}/>
        <Footer/>
      </Fragment>
    )
  }
}

export default Repo;
