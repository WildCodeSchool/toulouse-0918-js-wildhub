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
                  <img src={owner.avatar_url} alt={ownerName} className='mr-3' />
                }

                <CardTitle className='mt-3'>{ ownerName }</CardTitle>
              </div>

              <div className={`repo-infos text-${this.props.theme.color}`}>
                <h6>Détails du dépôt</h6>
                <div className={`pl-2 text-${this.props.theme.color}`}>
                  <small>
                      {created_at && `Crée le ${new Date(created_at).toLocaleDateString('fr-FR')}` }
                  </small>
                </div>
                <div className={`pl-2 text-${this.props.theme.color}`}>
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
