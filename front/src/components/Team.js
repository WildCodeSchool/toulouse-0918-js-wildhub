import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Fa } from 'mdbreact';
import TeamMembers from '../data/TeamMembers';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/team.scss';

class Team extends Component {
    render() {
        return (
            <div id='team-page'>
              <Navbar />
              <main>
                <Container className='text-center pt-5 pb-5'>
                  <h2 className="font-weight-bold my-5">WidHub team</h2>
                  <p className="grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>

                  <Row className='align-items-center pt-4 pb-4'>
                    {
                      TeamMembers.map(((member, key) =>
                        {
                          const { name, job, social, avatar } = member;
                          return(
                            <Col key={key} lg="3" md="6"  className="mb-lg-0 mb-5">
                              <Card className='pt-4 pb-2'>
                                <img src={avatar} className="rounded-circle w-50 mx-auto z-depth-1 img-fluid" alt={name}/>
                                <h5 className="font-weight-bold mt-4 mb-3">{name}</h5>
                                <p className="grey-text">{job}</p>

                                <ul className='team-members p-0'>
                                  {
                                    social.map((memberSocial, key) => {
                                      const { link, icon } = memberSocial;
                                      return (
                                        <Fragment key={key}>
                                          <li>
                                            <a href={link} target="_blank" rel="noopener noreferrer">
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
              <Footer />
            </div>
        );
    }
}

export default Team;
