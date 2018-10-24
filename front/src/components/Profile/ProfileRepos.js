import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Button
} from 'mdbreact';
import { NavLink, withRouter } from "react-router-dom"
import RepoCard from '../Repo/RepoCard';

class ProfileRepos extends Component{

    constructor(props) {
        super(props);
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
      const { username, urlUsername, idActives } = this.props;

        return (
          <Fragment>
            {
              username === urlUsername &&
              <Row className='mb-5'>
                <Col xs='12'>

                  <NavLink to={`/users/${username}`}>
                    <Button color="elegant">
                      Dépôts partagés
                    </Button>
                  </NavLink>


                  <NavLink to={`/users/${username}/gerer-mes-repos`}>
                    <Button color="elegant">
                      Gérer mes dépôts
                    </Button>
                  </NavLink>

                </Col>
              </Row>
            }

            <Row>
              {reposList.map( (repo, idx) =>
                {
                  const isActive = idActives && idActives.includes(repo.id)

                  return(
                    <RepoCard
                      key={idx}
                      repo={repo}
                      idx={idx}
                      name={repo.name}
                      postRepoExplore={() => this.postRepoExplore(repo)}
                      isActive={isActive}
                    />
                  )
                }

                  )
              }
            </Row>
          </Fragment>
        );
    }
}

export default withRouter(ProfileRepos);
