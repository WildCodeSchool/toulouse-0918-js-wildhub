import React, {Component, Fragment} from "react";
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
      let isSelect = this.state.isRepoSelect;
      const reposList = this.props.getReposList;

        return (
          <Row>
            {reposList.map( (repo, index) => {
                let langArr = [];
                let sumCarac = 0;

                return(
                  <DisplayRepoCard
                    repo={repo}
                    key={index}
                  />
                )
            })}
            </Row>
        );
    }
}

export default Projet;
