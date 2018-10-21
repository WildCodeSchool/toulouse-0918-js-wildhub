import React, { Component } from 'react';
import GitHubLogin from 'react-github-login';
// import img from '../images/logo-accueil.png';
import {NavLink} from 'react-router-dom';
import { Parallax } from "react-parallax";
import { Container, Row, Col, Button, Fa } from 'mdbreact';
import styled from 'react-emotion';
import blackLogo from '../images/loading.png';
// import whiteLogo from '../images/logo-accueil.png';
import { clientId, redirectUri } from '../settings';

// Images pour le parallax
const images = {
  image1: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  image2: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  image3: "https://images.pexels.com/photos/517884/pexels-photo-517884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  image4: "https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  image5: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
}


// Style de la div qui va changer de thème
const MainPresentation = styled('div')(

  props => ({
    backgroundColor: props.bgColor,
    color: props.color
  })
)

const Title = styled('h2')(
  {
    fontFamily: "Gotham"
  },
)

const Text = styled('p')(
  {
    fontFamily: "SourceSans"
  },
)

// Propriétés du theme dark
const darkThemeProps = {
  nameTheme: 'Dark Theme',
  iconeTheme: 'fa fa-moon-o',
  bgColorButton: 'black',
  bgColor: '#262626',
  color: 'white',
  logo: blackLogo
}

// Propriétés du theme light
const lightThemeProps = {
  nameTheme: 'Light Theme',
  iconeTheme: 'fa fa-sun-o',
  bgColorButton: 'white',
  bgColor: 'white',
  color: 'black',
  logo: blackLogo,
}

class Home extends Component {

    constructor(props){
      super(props);
      this.state = {
        darkTheme: true,
        username: ''
      }
    }

    changeTheme = () => {
      this.setState({
        darkTheme: !this.state.darkTheme
      })
    }

    getUsername = (e) => {
      this.setState({
        username: e.target.value
      })
    }

    render() {
      // Renvoie les propriété de l'objet darkThemeProps ou lightThemeProps selon le sate
      const themeProps = this.state.darkTheme ? darkThemeProps : lightThemeProps;

      console.log(this.props)

        return (
            <main id='home-page'>
                <Button
                  onClick={this.changeTheme}
                  bgColor={themeProps.bgColorButton}
                  color={themeProps.bgColorButton}
                  style={{ position:'fixed', zIndex:"10", borderRadius: '100px' }}
                  className="py-3 px-4"
                >
                  <i className={themeProps.iconeTheme} aria-hidden="true"></i>
                </Button>

                <header>
                  <Container fluid>
                    <Row className="mainAccueil align-items-center">
                      <Col xs='10' md='8' lg='6' className="mx-auto text-center">
                        <div className="pt-5">
                          <img className="img-fluid logo mt-5" src={themeProps.logo} alt="logo" />
                        </div>

                        <MainPresentation color={themeProps.color}  className="pt-5">
                          <Title className="pb-3" >{"Bienvenue sur WildHub !"}</Title>
                          <Text className="text-left">{"Wild Hub est un outil de partage de projets personnels à disposition des actuels et anciens élèves de la Wild Code School. Après une simple inscription, partagez votre code sur l'espace dédié par l'intermédiaire de Git Hub. Vous ne souhaitez pas vous inscrire sur Wild Hub? Pas de problèmes, vous pourrez quand même consulter les projets diffusés par les Wilders."}</Text>
                          <Text className="fedra-text mt-5">Bonne visite !</Text>
                        </MainPresentation>

                        <div className="pt-5 pb-5">

                          {
                            this.props.login
                            ? ''
                            : <GitHubLogin
                              className="btn btn-primary"
                              scope="user:email,public_repo"
                              clientId={clientId}
                              redirectUri={`${redirectUri}/users/${this.props.login}`}
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
                  <Parallax bgImage={images.image1} strength={600}>
                    <div className="parallax-div"> </div>
                  </Parallax>

                    <MainPresentation
                      bgColor={themeProps.bgColor}
                      color={themeProps.color}
                      className="py-5 row"
                    >
                        <div className="col-md-6 mx-auto text-center d-flex flex-column align-self-center pr-5 pl-5">
                          <img className="img-fluid rounded z-depth-1" src={images.image2}  alt="placeHolder"></img>
                          <div className="mt-5">
                              <Title>{"La Plateforme d'échange des Wilders !"}</Title>
                              <Text>
                                  {"Wild Hub rassemble les codes écrits par les Wilders. Javascript, Java, PHP...toutes les langues parlées par les Wilders se retrouvent ici !"}
                              </Text>
                          </div>
                        </div>
                    </MainPresentation>

                    <Parallax bgImage={images.image3} strength={600} >
                      <div className="parallax-div"></div>
                    </Parallax>

                    <MainPresentation
                      bgColor={themeProps.bgColor}
                      color={themeProps.color}
                      className="py-5 row"
                    >
                        <div className="col-md-6 mx-auto text-center d-flex flex-column align-self-center pr-5 pl-5">
                          <img className="img-fluid rounded z-depth-1" src={images.image4}  alt="placeHolder"></img>
                          <div className="mt-5">
                              <Title>{"La Plateforme d'échange des Wilders !"}</Title>
                              <Text>
                                  {"Wild Hub rassemble les codes écrits par les Wilders. Javascript, Java, PHP...toutes les langues parlées par les Wilders se retrouvent ici !"}
                              </Text>
                          </div>
                        </div>
                    </MainPresentation>

                    <Parallax bgImage={images.image5} strength={600} >
                      <div className="parallax-div"></div>
                    </Parallax>
                </Container>
            </main>
        );
    }
}
export default Home;
