import React, { Component } from 'react';
import img from '../images/logo-accueil.png'
import {NavLink} from 'react-router-dom';
import { Parallax } from "react-parallax";
import { Container, Row, Col, Button, Fa } from 'mdbreact';
import GitHubLogin from 'react-github-login';



const image1 =
  "https://images.unsplash.com/photo-1526374870839-e155464bb9b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a34afeffc0b1dc2552ba82d61ea37204&auto=format&fit=crop&w=1650&q=80";
const image2=
"https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
const image3=
"https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";


class Home extends Component {
    render() {
        return (
            <main id='home-page'>
                <header>
                  <Container fluid>
                    <Row className="mainAccueil align-items-center">
                      <Col xs='10' md='8' lg='6' className="mx-auto text-center">
                        <div className="pt-5">
                          <img className="img-fluid logo mt-5" src={img} alt="logo" />
                        </div>
                        <div className="pt-5">
                          <h1 className="text-white pb-3">{"Bienvenue sur WildHub !"}</h1>
                          <p className="text-white text-left">{"Wild Hub est un outil de partage de projets personnels à disposition des actuels et anciens élèves de la Wild Code School. Après une simple inscription, partagez votre code sur l'espace dédié par l'intermédiaire de Git Hub. Vous ne souhaitez pas vous inscrire sur Wild Hub? Pas de problèmes, vous pourrez quand même consulter les projets diffusés par les Wilders."}</p>
                          <p className="text-white fedra-text mt-5">Bonne visite !</p>
                        </div>
                        <div className="pt-5 pb-5">
                          <NavLink to='/profile' className='text-white'>
                            <Button variant='contained' color='mdb' className="black-text">
                              <span style={{verticalAlign: 'middle'}}>
                                Se connecter
                                <Fa icon="github" className="ml-2" size="2x" style={{verticalAlign: 'middle'}}/>
                              </span>
                            </Button>

                          </NavLink>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </header>
                <Container fluid className="under-accueil p-0">
                  <Parallax  bgImage={image1} strength={600}>
                    <div className="parallax-div"> </div>
                  </Parallax>

                    <div className="row pt-5 pb-5 mainPresentation">
                        <div className="col-md-6 mx-auto text-center d-flex flex-column align-self-center pr-5 pl-5">
                          <img className="img-fluid rounded z-depth-1" src={image2}  alt="placeHolder"></img>
                          <div className="mt-5">
                              <h2 className="text-white">{"La Plateforme d'échange des Wilders !"}</h2>
                              <p className="text-white">
                                  {"Wild Hub rassemble les codes écrits par les Wilders. Javascript, Java, PHP...toutes les langues parlées par les Wilders se retrouvent ici !"}
                              </p>
                          </div>
                        </div>
                    </div>

                    <Parallax bgImage={image1} strength={600} >
                      <div className="parallax-div"></div>
                    </Parallax>
                </Container>
            </main>
        );
    }
}

export default Home;
