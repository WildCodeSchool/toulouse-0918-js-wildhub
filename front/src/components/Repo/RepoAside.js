import React, { Component } from 'react';
import { Col, Card, CardTitle, CardBody } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import LangList from './LangList';
import '../../styles/repo/repo-aside.scss';

class RepoAside extends Component {

  render() {

    const { ownerName, repo } = this.props;
    const { language_stat, created_at, updated_at, owner } = repo;

    return(

      <Col xs='12' lg='4' id='repo-aside' className='ml-auto mb-5'>

        <Card>
            <CardBody className='rounded'>
              <div className='owner-infos'>
                {
                  owner &&
                  <img src={owner.avatar_url} alt={ownerName} className='mr-3' />
                }

                <NavLink to={`/users/${ownerName}`}>
                    <CardTitle className='mt-3' style={{fontFamily: 'Gotham'}}>{ ownerName }</CardTitle>
                </NavLink>
              </div>

              <div className='repo-infos'>
                <h6 style={{fontFamily: 'Gotham', fontSize: '1em'}}>Détails du dépôt</h6>
                <div className='pl-2'>
                  <small style={{fontFamily: 'SourceSans', fontSize: '1em'}}>
                      {created_at && `Crée le ${new Date(created_at).toLocaleDateString('fr-FR')}` }
                  </small>
                </div>
                <div className='pl-2'>
                  <small style={{fontFamily: 'SourceSans', fontSize: '1em'}}>
                      {updated_at && `Dernière activité le ${new Date(updated_at).toLocaleDateString('fr-FR')}` }
                  </small>
                </div>

                {
                  language_stat &&
                  <LangList repo={repo} />
                }

              </div>

            </CardBody>
        </Card>

      </Col>

    )
  }
}

export default RepoAside;
