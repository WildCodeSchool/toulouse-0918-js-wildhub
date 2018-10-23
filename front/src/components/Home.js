import React, { Component } from 'react';
import GitHubLogin from 'react-github-login';
import { Container, Row, Col, Fa } from 'mdbreact';
import { Parallax } from "react-parallax";
import ParallaxImages from '../data/ParallaxImages.js';
import styled from 'react-emotion';
import { clientId, redirectUri } from '../settings';


// Style de la div qui va changer de thème
const MainPresentation = styled('div')(
  props => ({
    backgroundColor: props.bgColor,
    color: props.color
  })
)

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

const Header = styled('header')(
  props => ({
    backgroundColor: props.bgColor,
    color: props.color,
    filter: props.filter
  })
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
                <Header filter={this.props.theme.filter}>
                  <Container fluid >
                    <Row className="mainAccueil align-items-center">
                      <Col xs='10' md='8' lg='6' className="mx-auto text-center">
                        <div className="pt-5">
                          <img className="img-fluid logo mt-5" src={this.props.theme.logo} alt="logo" />
                        </div>

                        <MainPresentation color={this.props.theme.color}  className="pt-5">
                          <Title className="pb-3" >{"Bienvenue sur WildHub !"}</Title>
                          <Text className="text-left">{"Wild Hub est un outil de partage de projets personnels à disposition des actuels et anciens élèves de la Wild Code School. Après une simple inscription, partagez votre code sur l'espace dédié par l'intermédiaire de Git Hub. Vous ne souhaitez pas vous inscrire sur Wild Hub? Pas de problèmes, vous pourrez quand même consulter les projets diffusés par les Wilders."}</Text>
                          <Text className="fedra-text mt-5">Bonne visite !</Text>
                        </MainPresentation>

                        <div className="pt-5 pb-5">

                          {
                            this.props.login
                            ? ''
                            : <GitHubLogin
                              className="btn"
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
                </Header>

                <Container fluid className="under-accueil p-0">
                  <Parallax bgImage={ParallaxImages.image1} strength={600}>
                    <div className="parallax-div"> </div>
                  </Parallax>

                    <MainPresentation
                      bgColor={this.props.theme.bgColorDiv}
                      color={this.props.theme.color}
                      className="py-5 row"
                    >
                        <div className="col-md-6 mx-auto text-center d-flex flex-column align-self-center pr-5 pl-5">
                          <img className="img-fluid rounded z-depth-1" src={ParallaxImages.image2}  alt="placeHolder"></img>
                          <div className="mt-5">
                              <Title>{"La Plateforme d'échange des Wilders !"}</Title>
                              <Text>
                                  {"Wild Hub rassemble les codes écrits par les Wilders. Javascript, Java, PHP...toutes les langues parlées par les Wilders se retrouvent ici !"}
                              </Text>
                          </div>
                        </div>
                    </MainPresentation>

                    <Parallax bgImage={ParallaxImages.image3} strength={600} >
                      <div className="parallax-div"></div>
                    </Parallax>

                    <MainPresentation
                      bgColor={this.props.theme.bgColorDiv}
                      color={this.props.theme.color}
                      className="py-5 row"
                    >
                        <div className="col-md-6 mx-auto text-center d-flex flex-column align-self-center pr-5 pl-5">
                          <img className="img-fluid rounded z-depth-1" src={ParallaxImages.image4}  alt="placeHolder"></img>
                          <div className="mt-5">
                              <Title>{"La Plateforme d'échange des Wilders !"}</Title>
                              <Text>
                                  {"Wild Hub rassemble les codes écrits par les Wilders. Javascript, Java, PHP...toutes les langues parlées par les Wilders se retrouvent ici !"}
                              </Text>
                          </div>
                        </div>
                    </MainPresentation>

                    <Parallax bgImage={ParallaxImages.image5} strength={600} >
                      <div className="parallax-div"></div>
                    </Parallax>
                </Container>
            </main>
        );
    }
}
export default Home;
