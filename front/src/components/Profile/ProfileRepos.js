import React, { Component } from "react";
import { Row } from 'mdbreact';
import RepoCard from '../Repo/RepoCard';

class ProfileRepos extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedRepo: {}
        }
    }

    postRepoExplore(repo) {
      fetch('https://wildhub.ssd1.ovh/api/projects', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(repo)
      } )
    }

    render() {
      const reposList = this.props.getReposList;

        return (
          <Row>
            {reposList.map( (repo, idx) =>
                  <RepoCard
                    key={idx}
                    repo={repo}
                    idx={idx}
                    name={repo.name}
                    postRepoExplore={() => this.postRepoExplore(repo)}
                  />
                )
            }
            </Row>
        );
    }
}

export default ProfileRepos;
