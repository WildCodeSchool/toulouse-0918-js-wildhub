import React, { Component } from 'react';
import { Col, Card, CardTitle, CardBody } from 'mdbreact';
import LangList from './LangList';

class RepoAside extends Component {

  render() {

    const { ownerName, repo } = this.props;
    const { language_stat, created_at, updated_at, owner } = repo;

    return(

      <Col xs='12' lg='3' className='ml-auto mb-5'>

        <Card>
            <CardBody className={`rounded ${this.props.theme.colorItems}`}>
              <div className={`owner-infos text-${this.props.theme.color}`}>
                {
                  owner &&
                  <img src='https://avatars1.githubusercontent.com/u/39422372?v=4' alt={ownerName} className='mr-3' />
                }

                <CardTitle className='mt-3' style={{fontFamily: 'Gotham'}}>{ ownerName }</CardTitle>
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
