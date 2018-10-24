import React, { Component } from 'react';
import GitHubLogin from 'react-github-login';
import { Container, Row, Col, Fa } from 'mdbreact';
import { Parallax } from "react-parallax";
import ParallaxImages from '../data/ParallaxImages.js';
import styled from 'react-emotion';

import { clientId, redirectUri } from '../settings';


// Titres des présentations
const Title = styled('h2')(
    {
      fontFamily: "Gotham"
    },
)

// Texte des présentations
const Text = styled('p')(
  {
      fontFamily: "SourceSans"
  },
)

class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
        username: ''
      }
    }

    getUsername = (e) => {
      this.setState({
        username: e.target.value
      })
    }

    render() {

        return (
            <main id='home-page'>
                <header className={`${this.props.theme.bgColorDiv}`} >
                  <Container fluid >
                    <Row className="mainAccueil align-items-center">
                      <Col xs='10' md='8' lg='6' className="mx-auto text-center">

                        <div className="pt-5">
                          <img className="img-fluid logo mt-5" src={this.props.theme.logo} alt="logo" />
                        </div>

                        <div className={`pt-5 text-${this.props.theme.color}`} >
                          <h1 className="pb-3" >{"Bienvenue sur WildHub !"}</h1>
                          <p className="text-left">{"Wild Hub est une plateforme de partage qui rassemble les projets personnels des anciens et actuels élèves de la Wild Code School."}</p>
                          <Text className="fedra-text mt-5">Bonne visite !</Text>
                        </div >

                        <div className="pt-5 pb-5">

                          {
                            this.props.login
                            ? ''
                            : <GitHubLogin
                              className={`btn ${this.props.theme.color} text-${this.props.theme.nameTheme}`}
                              bgColor={this.props.theme.bgColor}
                              color={this.props.theme.color}
                              scope="user:email,public_repo"
                              clientId={clientId}
                              redirectUri={redirectUri}
                              onSuccess={this.props.handleLoginSuccess}
                              onFailure={this.props.handleLoginFailure}
                              children={<span style={{verticalAlign: 'middle'}}>
                                Se connecter
                                <Fa icon="github" className="ml-2" size="2x" style={{verticalAlign: 'middle'}}/>
                              </span>}
                            />
                          }

                        </div>
                      </Col>
                    </Row>
                  </Container>
                </header>

                <Container fluid className="under-accueil p-0">
                  <Parallax bgImage={ParallaxImages.image1} strength={600}>
                    <div className="parallax-div"> </div>
                  </Parallax>

                    <div className={`py-5 row text-${this.props.theme.color} ${this.props.theme.bgColorDiv}`} >
                        <div className="col-md-6 mx-auto text-center d-flex flex-column align-self-center pr-5 pl-5">
                          <img className="img-fluid rounded z-depth-1" src={ParallaxImages.image2}  alt="placeHolder"></img>
                          <div className="mt-5">
                              <h2>{"Envie de booster tes projets ?"}</h2>
                              <p>
                                  {"WildHub est une plateforme qui permet de partager tes projets personnels depuis GiHub.Tu peux sélectionner les projets que tu souhaite partager afin qu'ils apparaissent dans l'explorateur. Ainsi tous les Wilders pourront voir tes projets et éventuellement t'aider ou collaborer avec toi grâce au chat !"}
                              </p>
                          </div>
                        </div>
                    </div>

                    <Parallax bgImage={ParallaxImages.image3} strength={600} >
                      <div className="parallax-div"></div>
                    </Parallax>

                    <div className={`py-5 row text-${this.props.theme.color} ${this.props.theme.bgColorDiv}`} >
                        <div className="col-md-6 mx-auto text-center d-flex flex-column align-self-center pr-5 pl-5">
                          <img className="img-fluid rounded z-depth-1" src={ParallaxImages.image4}  alt="placeHolder"></img>
                          <div className="mt-5">
                              <h2>{"La Plateforme d'échange des Wilders !"}</h2>
                              <p>
                                  {"Wild Hub rassemble les codes écrits par les Wilders. Javascript, Java, PHP...toutes les langues parlées par les Wilders se retrouvent ici !"}
                              </p>
                          </div>
                        </div>
                    </div>

                    <Parallax bgImage={ParallaxImages.image5} strength={600} >
                      <div className="parallax-div"></div>
                    </Parallax>
                </Container>
            </main>
        );
    }
}
export default Home;
