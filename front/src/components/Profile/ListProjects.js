import React, { Component } from "react";
import { Row } from 'mdbreact';
import DisplayRepoCard from './ListProjects/DisplayRepoCard';

class Projet extends Component{

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
            {reposList.map( (repo, index) =>
                  <DisplayRepoCard
                    repo={repo}
                    key={index}
                    name={repo.name}
                  />
                )
            }
            </Row>
        );
    }
}

export default Projet;
