import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import {
    Col,
    Card,
    CardBody,
    CardTitle,
    CardFooter,
    Fa
} from 'mdbreact';
import { NavLink } from 'react-router-dom';
import LangBar from './LangBar';
import SwitchBtn from './SwitchBtn';
import '../../styles/repo/repo-card.scss';

class RepoCard extends Component {
    render() {

        const { repo, idx, name, isActive } = this.props;

        return(
            <Col  md='6' className='mb-4'>
              <Card className='repo-card'>
                <CardBody >
                  <div className="repo-title">
                      <NavLink to={`/users/${repo.owner.login}/repos/${repo.name}`} className="repo-name">
                        <CardTitle>{repo.name}</CardTitle>
                      </NavLink>
                      <a
                        href={repo.html_url}
                        target='_blank'
                        rel="noopener noreferrer"
                        className="ghIcon"
                        data-tip data-for={`tip-repo-${idx}`}
                      >
                        <Fa icon="github"/>
                      </a>
                      <ReactTooltip
                        id={`tip-repo-${idx}`}
                        place="left"
                        type="dark"
                        effect="solid"
                      >
                        Voir dans GitHub
                      </ReactTooltip>
                  </div>


                  <NavLink to={`/users/${repo.owner.login}`} className='repo-owner'>
                    <h6>{repo.owner.login}</h6>
                  </NavLink>

                  {
                    window.location.href.endsWith('/gerer-mes-repos') &&
                    <SwitchBtn isActive={isActive} repo={repo} />
                  }

                  <hr/>

                  <p className='repo-description'>
                    {repo.description}
                  </p>
                </CardBody>

                <CardFooter className='text-right'>
                  <small style={{fontFamily: 'SourceSans', fontSize: '0.9em'}}>
                    { `Dernière activité le ${new Date(repo.updated_at).toLocaleDateString('fr-FR')}` }
                  </small>
                </CardFooter>

                <LangBar repo={repo} key={idx} name={name}/>

              </Card>

            </Col>
        );
    }
}

export default RepoCard;
