import React, { Component } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import img from '../images/logo-accueil.png'
import imgAccueil1 from '../images/img-accueil1.jpg'
import imgAccueil2 from '../images/img-accueil2.jpg'
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Button, Fa } from 'mdbreact';

class Home extends Component {
    render() {
        return (
            <div id='home-page'>
              <Navbar />
                <div id="homePage">
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
                <Container fluid className="under-accueil">
                    <Row className="pt-5 pb-5">
                        <Col md='6' className="mx-auto text-center pt-5 pb-5">
                            <img className="img-fluid rounded z-depth-1" src={imgAccueil2} alt="placeHolder"></img>
                        </Col>
                        <Col md='6' className="mx-auto text-center d-flex flex-column align-self-center pr-5 pl-5">
                        <h2>Utilisez Wild Hub !</h2>
                        <p>
                          {"Un espace de partage sans limites pour tous les élèves de la Wild Code School. La plateforme Wild Hub rassemble tous les outils pour mettre en avant vos projets personnels."}
                        </p>
                      </Col>
                    </Row>
                    <Row className="pt-5 pb-5 mainPresentation">
                        <Col md='6' className="mx-auto text-center d-flex flex-column align-self-center pr-5 pl-5">
                            <h2 className="text-white">{"La Plateforme d'échange des Wilders !"}</h2>
                            <p className="text-white">
                                {"Wild Hub rassemble les codes écrits par les Wilders. Javascript, Java, PHP...toutes les langues parlées par les Wilders se retrouvent ici !"}
                        </p>
                      </Col>
                        <Col md='6' className="mx-auto text-center pb-5 pt-5">
                            <img className="img-fluid rounded z-depth-1" src={imgAccueil1}  alt="placeHolder"></img>
                        </Col>
                    </Row>
                    <Row className="pt-5 pb-5 mr-5 ml-5">
                        <Col xs='12' className="mx-auto text-center pb-5">
                            <img className="img-fluid rounded z-depth-1" src="https://via.placeholder.com/350x350" alt="placeHolder"></img>
                        </Col>
                        <Col xs='12' className="mx-auto text-center pr-5 pl-5">
                            <p>{"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea eius voluptatum perspiciatis magni quisquam inventore velit repudiandae culpa nesciunt ex ipsa totam, quae nam beatae odit quod, sed iusto aliquid!In delectus iure architecto nesciunt reiciendis alias aliquid dolorem, natus quas placeat nemo, voluptatibus autem ducimus rem officiis aperiam laudantium itaque molestiae saepe eveniet, nostrum totam molestias eum. Consectetur, dolorem."}</p>
                        </Col>
                    </Row>
                </Container>

                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
