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
            <CardBody>

              <div className='owner-infos'>
                {
                  owner &&
                  <img src='https://avatars1.githubusercontent.com/u/39422372?v=4' alt={ownerName} className='mr-3' />
                }

                <CardTitle className='mt-3'>{ ownerName }</CardTitle>
              </div>

              <div className="repo-infos">

                <h6>Détails du dépôt</h6>

                <div className='text-muted pl-2'>
                  <small>
                      {created_at && `Crée le ${new Date(created_at).toLocaleDateString('fr-FR')}` }
                  </small>
                </div>
                <div className='text-muted pl-2'>
                  <small>
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
