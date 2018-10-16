import React, { Component, Fragment } from 'react';
import token from '../../../config';

class Repo extends Component {

  constructor(props){
    super(props);
    this.state = {
      repo: []
    }
  }

  componentDidMount() {
    const { ownerName, repoName } = this.props.match.params;
    fetch(`https://api.github.com/repos/${ownerName}/${repoName}`, {
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
  }

  render() {
    const { repoName } = this.props.match.params;
    const { name } = this.state.repo;
    return (
      <Fragment>
        <div>{name}</div>
      </Fragment>
    );
  }
}

export default Repo;
