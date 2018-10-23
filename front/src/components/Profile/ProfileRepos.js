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
                  />
                )
            }
            </Row>
        );
    }
}

export default ProfileRepos;
