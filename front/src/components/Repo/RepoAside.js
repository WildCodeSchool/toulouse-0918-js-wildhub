import React, { Component } from 'react';
import { Col, Card, CardTitle, CardBody } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import LangList from './LangList';

class RepoAside extends Component {

  render() {

    const { ownerName, repo } = this.props;
    const { language_stat, created_at, updated_at, owner } = repo;

    return(

      <Col xs='12' lg='4' className='ml-auto mb-5'>

        <Card>
            <CardBody className={`rounded ${this.props.theme.colorItems}`}>
              <div className={`owner-infos text-${this.props.theme.color}`}>
                {
                  owner &&
                  <img src={owner.avatar_url} alt={ownerName} className='mr-3' />
                }

                <NavLink to={`/users/${ownerName}`} style={{color: '#3e3e3e'}}>
                    <CardTitle className='mt-3' style={{fontFamily: 'Gotham'}}>{ ownerName }</CardTitle>
                </NavLink>
              </div>

              <div className={`repo-infos text-${this.props.theme.color}`}>
                <h6 style={{fontFamily: 'Gotham', fontSize: '1em'}}>Détails du dépôt</h6>
                <div className={`pl-2 text-${this.props.theme.color}`}>
                  <small style={{fontFamily: 'SourceSans', fontSize: '1em'}}>
                      {created_at && `Crée le ${new Date(created_at).toLocaleDateString('fr-FR')}` }
                  </small>
                </div>
                <div className={`pl-2 text-${this.props.theme.color}`}>
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
