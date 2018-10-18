import React, { Component, Fragment } from 'react';
import RepoDescription from './RepoDescription';

class Repo extends Component {

  render() {
    const { ownerName, repoName } = this.props.match.params;
    return (
      <Fragment>
        <RepoDescription ownerName={ownerName} repoName={repoName}/>
      </Fragment>
    )
  }
}

export default Repo;
