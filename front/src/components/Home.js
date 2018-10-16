import React, { Component } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import img from '../images/logo-accueil.png'
import imgAccueil1 from '../images/img-accueil1.jpg'
import imgAccueil2 from '../images/img-accueil2.jpg'
import {NavLink} from 'react-router-dom';
import { Button, Fa } from 'mdbreact';

class Home extends Component {
    render() {
        return (
            <div id='home-page'>
              <Navbar />
                <div id="homePage">
                  <header className="container-fluid">
                      <div className="row mainAccueil">
                          <div className="col-10 col-md-8 col-lg-6 mx-auto text-center">
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
                                    <Button variant='contained' color='blue-grey'>
                                        <span style={{verticalAlign: 'middle'}}>
                                          Se connecter
                                          <Fa icon="github" className="ml-2" size="2x" style={{verticalAlign: 'middle'}}/>
                                        </span>
                                    </Button>
                                </NavLink>
                              </div>
                          </div>
                      </div>
                  </header>
                  <div className="container-fluid under-accueil">
                      <div className="row pt-5 pb-5">
                          <div className="col-md-6 mx-auto text-center pt-5 pb-5">
                              <img className="img-fluid rounded z-depth-1" src={imgAccueil2} alt="placeHolder"></img>
                          </div>
                          <div className="col-md-6 mx-auto text-center d-flex flex-column align-self-center pr-5 pl-5">
                              <h2>Utilisez Wild Hub !</h2>
                              <p>
                                  {"Un espace de partage sans limites pour tous les élèves de la Wild Code School. La plateforme Wild Hub rassemble tous les outils pour mettre en avant vos projets personnels."}
                          </p>
                          </div>
                      </div>
                      <div className="row pt-5 pb-5 mainPresentation">
                          <div className="col-md-6 mx-auto text-center d-flex flex-column align-self-center pr-5 pl-5">
                              <h2 className="text-white">{"La Plateforme d'échange des Wilders !"}</h2>
                              <p className="text-white">
                                  {"Wild Hub rassemble les codes écrits par les Wilders. Javascript, Java, PHP...toutes les langues parlées par les Wilders se retrouvent ici !"}
                          </p>
                          </div>
                          <div className="col-md-6 mx-auto text-center pb-5 pt-5">
                              <img className="img-fluid rounded z-depth-1" src={imgAccueil1}  alt="placeHolder"></img>
                          </div>
                      </div>
                      <div className="row pt-5 pb-5 mr-5 ml-5">
                          <div className="col-12 mx-auto text-center pb-5">
                              <img className="img-fluid rounded z-depth-1" src="https://via.placeholder.com/350x350" alt="placeHolder"></img>
                          </div>
                          <div className="col-12 mx-auto text-center pr-5 pl-5">
                              <p>{"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea eius voluptatum perspiciatis magni quisquam inventore velit repudiandae culpa nesciunt ex ipsa totam, quae nam beatae odit quod, sed iusto aliquid!In delectus iure architecto nesciunt reiciendis alias aliquid dolorem, natus quas placeat nemo, voluptatibus autem ducimus rem officiis aperiam laudantium itaque molestiae saepe eveniet, nostrum totam molestias eum. Consectetur, dolorem."}</p>
                          </div>
                      </div>
                  </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
