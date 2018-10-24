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
      const { username, urlUsername, idActives, theme } = this.props;

        return (
          <Fragment>
            {
              username === urlUsername &&
              <Row className='mb-5'>
                <Col xs='12' className='d-flex justify-content-center'>

                  <NavLink exact to={`/users/${username}`}>
                    <Button color="elegant">
                      Dépôts partagés
                    </Button>
                  </NavLink>


                  <NavLink exact to={`/users/${username}/gerer-mes-repos`}>
                    <Button color="elegant">
                      Gérer mes dépôts
                    </Button>
                  </NavLink>

                </Col>
              </Row>
            }

            <Row>
              {!reposList.length > 0
                ? <Col><p className="h6 text-center text-muted">{"Aucun dépôt n'est répertorié"}</p></Col>
                : reposList.map( (repo, idx) =>{
                  const isActive = idActives && idActives.includes(repo.id)

                  return(
                    <RepoCard
                      key={idx}
                      repo={repo}
                      idx={idx}
                      name={repo.name}
                      postRepoExplore={() => this.postRepoExplore(repo)}
                      isActive={isActive}
                      theme={theme}
                    />
                  )
                })
              }
            </Row>
          </Fragment>
        );
    }
}

export default withRouter(ProfileRepos);
