import React, {Component} from "react";
import { Col, Card, CardBody, CardTitle, CardFooter, Fa } from 'mdbreact';
import ReactTooltip from 'react-tooltip';
import LanguagesBar from './Profile/ListProjects/LanguagesBar';
import { Link } from 'react-router-dom';

class DisplayRepoCatalogue extends Component {
  render() {
    const {description, created_at, updated_at, html_url, owner } = this.props.repo;
    const { key, repo, name } = this.props;
    return(
      <Col xs='12' lg='4' className="mx-auto mb-5">
          <Card className="repoCard">
              <CardBody>
                  <div className="repo-title">
                    <Link to={`${owner.login}/repos/${name}`} className="repo-name">
                      <CardTitle>{name}</CardTitle>
                    </Link>

                    <a
                        href={html_url}
                        target='_blank'
                        rel="noopener noreferrer"
                        className="ghIcon"
                        data-tip data-for={`tip-repo-${key}`}
                        className="ghIcon">
                          <Fa icon="github" />
                    </a>
                    <ReactTooltip
                        id={`tip-repo-${key}`}
                        place="left"
                        type="dark"
                        effect="solid">
                        Voir dans GitHub
                    </ReactTooltip>
                  </div>



                  <Link to='/profile' className='repo-owner'>
                    <h6>{owner.login}</h6>
                  </Link>

                  <hr />

                  <small className='text-muted'>
                      {description}
                  </small>
              </CardBody>
              <CardFooter>
                  <small className='text-muted font-italic'>
                      Créé le {created_at}
                  </small>
                  <small className='text-muted font-italic'>
                      Dernière activitée le {updated_at}
                  </small>
              </CardFooter>

            {/*Le problème de l'affichage du span vient probablement de la manière dont est importé le repo dans la BDD, décalage key/value*/}
              <LanguagesBar repo={repo} key={key} name={name}/>

          </Card>
      </Col>
    )
  }
}


export default DisplayRepoCatalogue;
