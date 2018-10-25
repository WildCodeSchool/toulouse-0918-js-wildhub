import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Fa } from 'mdbreact';
import TeamMembers from '../data/TeamMembers';
import '../styles/team.scss';



class Team extends Component {

  componentDidMount(){
    this.props.resetLoading(false);
  }

  render() {
         return (
          <main id='team-page' className={`${this.props.theme.bgColorDiv}`} >
            <Container className='text-center pt-4 pb-5'>
              <h2 className={`font-weight-bold my-5 text-white`} >La fine équipe</h2>
              <p className={`head-text w-responsive mx-auto mb-2 text-white`} >« L’esprit d’équipe… C’est des mecs qui sont une équipe, ils ont un esprit ! Alors, ils partagent ! » </p>
              <p className={`head-text w-responsive mb-5 text-right font-italic text-white`}>- Coluche</p>
              <Row className='align-items-center pt-4 pb-4'>
                {
                  TeamMembers.map(((member, key) =>
                    {
                      const { name, job, social, avatar } = member;
                      return(
                        <Col key={key} lg="3" md="6" sm='8' className="mb-lg-0 mb-5 mx-auto">
                          <Card className={` pt-4 ${this.props.theme.colorItems}`} bgColor={this.props.theme.bgColor}>
                            <img src={avatar} className="rounded-circle w-50 mx-auto z-depth-1 img-fluid" alt={name}/>
                            <h5 className={`font-weight-bold mt-4 mb-3 text-${this.props.theme.color}`} >{name}</h5>
                            <p className={`text-${this.props.theme.color}`}>{job}</p>
                            <ul className='team-members p-0'>
                              {
                                social.map((memberSocial, key) => {
                                  const { link, icon } = memberSocial;
                                  return (
                                    <Fragment key={key}>
                                      <li>
                                        <a className="img-fluid" href={link} target="_blank" rel="noopener noreferrer">
                                          <Fa icon={icon} size='lg' />
                                        </a>
                                      </li>
                                    </Fragment>
                                  )})
                              }
                            </ul>

                          </Card>
                        </Col>
                      )
                    }
                  ))
                }
              </Row>
            </Container>
          </main>
      );
  }
}

export default Team;
